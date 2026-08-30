import { useEffect, useRef, useState } from "react";
import fileSystem from "../../terminal/fileSystem";
import {
    submitTerminalFlag,
} from "../../ctf/utils/terminalChallengeEngine";


const TERMINAL_STORAGE_KEY = "cyberverse_terminal_state";

function CyberTerminal() {
    // =========================
    // LOAD SAVED TERMINAL STATE
    // =========================

    function loadTerminalState() {
        try {
            const saved =
                localStorage.getItem(
                    TERMINAL_STORAGE_KEY
                );

            if (!saved) {
                return null;
            }

            return JSON.parse(saved);
        } catch (error) {
            console.error(
                "Failed to load terminal state:",
                error
            );

            return null;
        }
    }

    const savedState = loadTerminalState();

    // =========================
    // FILE SYSTEM
    // =========================

    const [terminalFileSystem, setTerminalFileSystem] =
        useState(
            () =>
                savedState?.fileSystem ||
                JSON.parse(
                    JSON.stringify(fileSystem)
                )
        );

    // =========================
    // TERMINAL HISTORY
    // =========================

    const [history, setHistory] =
        useState(
            () =>
                savedState?.history || [
                    {
                        type: "system",
                        text: "CyberVerse Terminal v1.0",
                    },
                    {
                        type: "system",
                        text:
                            'Type "help" to see available commands.',
                    },
                ]
        );

    // =========================
    // PROCESSES
    // =========================

    const [processes, setProcesses] =
        useState([
            {
                pid: "1",
                user: "root",
                command: "/sbin/init",
            },
            {
                pid: "42",
                user: "root",
                command: "/usr/sbin/sshd",
            },
            {
                pid: "101",
                user: "cyberuser",
                command: "/bin/bash",
            },
            {
                pid: "133",
                user: "cyberuser",
                command: "./cyberverse",
            },
            {
                pid: "404",
                user: "root",
                command: "/usr/bin/monitor",
            },
        ]);

    // =========================
    // INPUT
    // =========================

    const [input, setInput] = useState("");

    // =========================
    // CURRENT DIRECTORY
    // =========================

    const [currentPath, setCurrentPath] =
        useState(
            savedState?.currentPath ||
            "/home/cyberuser"
        );

    // =========================
    // INPUT REF
    // =========================

    const inputRef = useRef(null);

    // =========================
    // KEEP INPUT FOCUSED
    // =========================

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // =========================
    // SAVE TERMINAL STATE
    // =========================

    useEffect(() => {
        try {
            const state = {
                fileSystem:
                    terminalFileSystem,

                history,

                currentPath,
            };

            localStorage.setItem(
                TERMINAL_STORAGE_KEY,
                JSON.stringify(state)
            );
        } catch (error) {
            console.error(
                "Failed to save terminal state:",
                error
            );
        }
    }, [
        terminalFileSystem,
        history,
        currentPath,
    ]);

    // =========================
    // GET NODE BY PATH
    // =========================

    function getNode(path) {
        if (!path) {
            return null;
        }

        if (path === "/") {
            return terminalFileSystem;
        }

        const parts =
            path
                .split("/")
                .filter(Boolean);

        let current =
            terminalFileSystem;

        for (const part of parts) {
            if (
                !current ||
                !current.children ||
                !current.children[part]
            ) {
                return null;
            }

            current =
                current.children[part];
        }

        return current;
    }

    // =========================
    // GET DIRECTORY
    // =========================

    function getDirectory(path) {
        const node =
            getNode(path);

        if (
            node &&
            node.type === "directory"
        ) {
            return node;
        }

        if (
            path === "/" &&
            node
        ) {
            return node;
        }

        return null;
    }

    // =========================
    // NORMALIZE PATH
    // =========================

    function normalizePath(path) {
        if (!path) {
            return "/";
        }

        const parts =
            path
                .split("/")
                .filter(Boolean);

        const result = [];

        for (const part of parts) {
            if (part === ".") {
                continue;
            }

            if (part === "..") {
                if (result.length > 0) {
                    result.pop();
                }

                continue;
            }

            result.push(part);
        }

        return "/" + result.join("/");
    }

    // =========================
    // RESOLVE PATH
    // =========================

    function resolvePath(target) {
        if (!target) {
            return currentPath;
        }

        if (target === "~") {
            return "/home/cyberuser";
        }

        if (target.startsWith("~/")) {
            return normalizePath(
                `/home/cyberuser/${target.slice(2)}`
            );
        }

        if (target.startsWith("/")) {
            return normalizePath(target);
        }

        return normalizePath(
            `${currentPath}/${target}`
        );
    }

    // =========================
    // GET PROMPT
    // =========================

    function getPrompt() {
        return `cyberuser@cyberverse:${currentPath}$`;
    }

    // =========================
    // GET FILE / NODE
    // =========================

    function getFile(target) {
        const filePath =
            resolvePath(target);

        const node =
            getNode(filePath);

        return {
            path: filePath,
            node,
        };
    }

    // =========================
    // UPDATE FILE SYSTEM
    // =========================

    function updateFileSystem(callback) {
        setTerminalFileSystem(
            (previous) => {
                const next =
                    JSON.parse(
                        JSON.stringify(
                            previous
                        )
                    );

                callback(next);

                return next;
            }
        );
    }

    // =========================
    // HELP
    // =========================

    function getHelp() {
        return [
            "Available commands:",
            "",
            "help      - Show available commands",
            "clear     - Clear terminal",
            "whoami    - Show current user",
            "pwd       - Show current directory",
            "ls        - List files and directories",
            "cd        - Change directory",
            "cat       - Display file contents",
            "mkdir     - Create directory",
            "touch     - Create file",
            "rm        - Remove file",
            "echo      - Print text",
            "find      - Search for files",
            "grep      - Search text inside files",
            "head      - Show first lines of a file",
            "tail      - Show last lines of a file",
            "history   - Show command history",
            "env       - Show environment variables",
            "chmod     - Change file permissions",
            "ps        - Show running processes",
            "kill      - Terminate a process",
            "submitflag - Submit a challenge flag",
            "",
            "Shell features:",
            "echo text > file.txt",
            "echo text >> file.txt",
            "ls -a",
            "find . -name filename",
            "grep text file.txt",
            "chmod 755 file.txt",
        ].join("\n");
    }

    // =========================
    // LS
    // =========================

    function executeLs(args) {
        const showHidden =
            args.includes("-a") ||
            args.includes("--all");

        const target =
            args.find(
                (arg) =>
                    !arg.startsWith("-")
            ) || ".";

        const path =
            resolvePath(target);

        const directory =
            getDirectory(path);

        if (!directory) {
            const node =
                getNode(path);

            if (
                node &&
                node.type === "file"
            ) {
                return node.name;
            }

            return `ls: cannot access '${target}': No such file or directory`;
        }

        const entries =
            Object.values(
                directory.children || {}
            );

        const visibleEntries =
            showHidden
                ? entries
                : entries.filter(
                    (entry) =>
                        !entry.name.startsWith(".")
                );

        return visibleEntries
            .map((entry) => {
                const permissions =
                    entry.permissions ||
                    (
                        entry.type === "directory"
                            ? "755"
                            : "644"
                    );

                const prefix =
                    entry.type === "directory"
                        ? "d"
                        : "-";

                const name =
                    entry.type === "directory"
                        ? `${entry.name}/`
                        : entry.name;

                return `${prefix}${permissions}  ${name}`;
            })
            .join("\n");
    }
/// Check Terminal CTF Flag
function checkTerminalFlag(content) {
    if (!content) {
        return "";
    }

    const flag = String(content).trim();

    const result = submitTerminalFlag(
        "terminal_file_discovery",
        flag
    );

    // Challenge already solved
    if (result.alreadySolved) {
        return [
            "",
            "🏆 Terminal Challenge Already Solved!",
            "+100 XP",
            "+100 Points",
        ].join("\n");
    }

    // Incorrect or invalid flag
    if (!result.success) {
        return "";
    }

    // Correct flag
    return [
        "",
        "================================",
        "🏆 TERMINAL CHALLENGE SOLVED!",
        "================================",
        `Challenge: ${result.challenge.title}`,
        `+${result.challenge.xp} XP`,
        `+${result.challenge.points} Points`,
        "================================",
    ].join("\n");
}

 // =========================
// CAT
// =========================

function executeCat(args) {
    if (!args[0]) {
        return "cat: missing file operand";
    }

    const target = args[0];

    const { node } = getFile(target);

    if (!node) {
        return `cat: ${target}: No such file or directory`;
    }

    if (node.type !== "file") {
        return `cat: ${target}: Is a directory`;
    }

    const content = node.content || "";

    // Check terminal CTF flag
    const challengeMessage =
        checkTerminalFlag(content);

    if (challengeMessage) {
        return `${content}\n${challengeMessage}`;
    }

    return content;
}

    // =========================
    // CD
    // =========================

    function executeCd(args) {
        const target =
            args[0] || "~";

        const newPath =
            resolvePath(target);

        const directory =
            getDirectory(newPath);

        if (!directory) {
            return `cd: ${target}: No such file or directory`;
        }

        setCurrentPath(newPath);

        return "";
    }

    // =========================
    // MKDIR
    // =========================

    function executeMkdir(args) {
        if (!args[0]) {
            return "mkdir: missing operand";
        }

        const target =
            args[0];

        const path =
            resolvePath(target);

        const parentParts =
            path
                .split("/")
                .filter(Boolean);

        const name =
            parentParts.pop();

        const parentPath =
            "/" +
            parentParts.join("/");

        const parent =
            getDirectory(
                parentPath || "/"
            );

        if (!parent) {
            return `mkdir: cannot create directory '${target}': No such file or directory`;
        }

        if (
            parent.children?.[name]
        ) {
            return `mkdir: cannot create directory '${target}': File exists`;
        }

        updateFileSystem((fs) => {
            let current = fs;

            for (
                const part of parentParts
            ) {
                if (
                    !current.children ||
                    !current.children[part]
                ) {
                    return;
                }

                current =
                    current.children[part];
            }

            current.children[name] = {
                type: "directory",
                name,
                permissions: "755",
                children: {},
            };
        });

        return "";
    }

    // =========================
    // TOUCH
    // =========================

    function executeTouch(args) {
        if (!args[0]) {
            return "touch: missing file operand";
        }

        const target =
            args[0];

        const path =
            resolvePath(target);

        const parts =
            path
                .split("/")
                .filter(Boolean);

        const name =
            parts.pop();

        const parentPath =
            "/" +
            parts.join("/");

        const parent =
            getDirectory(
                parentPath || "/"
            );

        if (!parent) {
            return `touch: cannot touch '${target}': No such file or directory`;
        }

        if (
            parent.children?.[name]
        ) {
            return "";
        }

        updateFileSystem((fs) => {
            let current = fs;

            for (
                const part of parts
            ) {
                if (
                    !current.children ||
                    !current.children[part]
                ) {
                    return;
                }

                current =
                    current.children[part];
            }

            current.children[name] = {
                type: "file",
                name,
                permissions: "644",
                content: "",
            };
        });

        return "";
    }

    // =========================
    // RM
    // =========================

    function executeRm(args) {
        const recursive =
            args.includes("-r") ||
            args.includes("-rf") ||
            args.includes("-R");

        const target =
            args.find(
                (arg) =>
                    !arg.startsWith("-")
            );

        if (!target) {
            return "rm: missing operand";
        }

        const path =
            resolvePath(target);

        const parts =
            path
                .split("/")
                .filter(Boolean);

        const name =
            parts.pop();

        const parentPath =
            "/" +
            parts.join("/");

        const parent =
            getDirectory(
                parentPath || "/"
            );

        if (!parent) {
            return `rm: cannot remove '${target}': No such file or directory`;
        }

        const node =
            parent.children?.[name];

        if (!node) {
            return `rm: cannot remove '${target}': No such file or directory`;
        }

        if (
            node.type === "directory" &&
            !recursive
        ) {
            return `rm: cannot remove '${target}': Is a directory`;
        }

        updateFileSystem((fs) => {
            let current = fs;

            for (
                const part of parts
            ) {
                if (
                    !current.children ||
                    !current.children[part]
                ) {
                    return;
                }

                current =
                    current.children[part];
            }

            delete current.children[name];
        });

        return "";
    }

    // =========================
    // ECHO
    // =========================

    function executeEcho(command) {
        const redirectMatch =
            command.match(
                /^echo\s+(.*?)\s*(>>|>)\s*(.+)$/
            );

        if (redirectMatch) {
            const rawText =
                redirectMatch[1];

            const operator =
                redirectMatch[2];

            const filename =
                redirectMatch[3].trim();

            if (!filename) {
                return "bash: syntax error near unexpected token 'newline'";
            }

            const text =
                rawText
                    .replace(
                        /^["']|["']$/g,
                        ""
                    );

            const filePath =
                resolvePath(filename);

            const existing =
                getNode(filePath);

            if (
                existing &&
                existing.type !== "file"
            ) {
                return `bash: ${filename}: Is a directory`;
            }

            const parts =
                filePath
                    .split("/")
                    .filter(Boolean);

            const name =
                parts.pop();

            const parentPath =
                "/" +
                parts.join("/");

            const parent =
                getDirectory(
                    parentPath || "/"
                );

            if (!parent) {
                return `bash: ${filename}: No such file or directory`;
            }

            updateFileSystem((fs) => {
                let current = fs;

                for (
                    const part of parts
                ) {
                    if (
                        !current.children ||
                        !current.children[part]
                    ) {
                        return;
                    }

                    current =
                        current.children[part];
                }

                if (
                    !current.children[name]
                ) {
                    current.children[name] = {
                        type: "file",
                        name,
                        permissions: "644",
                        content: "",
                    };
                }

                if (
                    operator === ">>"
                ) {
                    const oldContent =
                        current.children[name]
                            .content || "";

                    current.children[name]
                        .content =
                        oldContent
                            ? `${oldContent}\n${text}`
                            : text;
                } else {
                    current.children[name]
                        .content = text;
                }
            });

            return "";
        }

        const text =
            command
                .replace(/^echo\s*/, "")
                .replace(
                    /^["']|["']$/g,
                    ""
                );

        return text;
    }

    // =========================
    // FIND
    // =========================

    function executeFind(args) {
        let startPath =
            currentPath;

        let searchName =
            "";

        if (
            args.length >= 3 &&
            args[1] === "-name"
        ) {
            startPath =
                resolvePath(args[0]);

            searchName =
                args[2];
        }

        else if (
            args.length >= 2 &&
            args[0] === "-name"
        ) {
            startPath =
                currentPath;

            searchName =
                args[1];
        }

        else if (
            args.length >= 1
        ) {
            searchName =
                args[0];
        }

        if (!searchName) {
            return "find: missing search term";
        }

        const startDirectory =
            getDirectory(startPath);

        if (!startDirectory) {
            return `find: '${startPath}': No such file or directory`;
        }

        const results = [];

        function searchDirectory(
            directory,
            path
        ) {
            Object.values(
                directory.children || {}
            ).forEach((entry) => {
                const entryPath =
                    path === "/"
                        ? `/${entry.name}`
                        : `${path}/${entry.name}`;

                if (
                    entry.name === searchName ||
                    entry.name.includes(searchName)
                ) {
                    results.push(entryPath);
                }

                if (
                    entry.type === "directory"
                ) {
                    searchDirectory(
                        entry,
                        entryPath
                    );
                }
            });
        }

        searchDirectory(
            startDirectory,
            startPath
        );

        return results.length
            ? results.join("\n")
            : "";
    }

    // =========================
    // GREP
    // =========================

    function executeGrep(args) {
        if (!args[0]) {
            return "grep: missing search pattern";
        }

        if (!args[1]) {
            return "grep: missing file operand";
        }

        const searchPattern =
            args[0];

        const filename =
            args[1];

        const { node } =
            getFile(filename);

        if (!node) {
            return `grep: ${filename}: No such file or directory`;
        }

        if (node.type !== "file") {
            return `grep: ${filename}: Is a directory`;
        }

        const lines =
            (node.content || "")
                .split("\n");

        const matches =
            lines.filter((line) =>
                line
                    .toLowerCase()
                    .includes(
                        searchPattern.toLowerCase()
                    )
            );

        return matches.join("\n");
    }

    // =========================
    // HEAD / TAIL
    // =========================

    function executeHeadTail(
        command,
        args
    ) {
        if (!args[0]) {
            return `${command}: missing file operand`;
        }

        let filename =
            args[0];

        let linesCount = 10;

        if (
            args[0] === "-n" &&
            args[1]
        ) {
            linesCount =
                parseInt(
                    args[1],
                    10
                );

            filename =
                args[2];
        }

        else if (
            args[0].startsWith("-n")
        ) {
            linesCount =
                parseInt(
                    args[0].slice(2),
                    10
                );

            filename =
                args[1];
        }

        if (!filename) {
            return `${command}: missing file operand`;
        }

        if (
            Number.isNaN(linesCount) ||
            linesCount < 0
        ) {
            return `${command}: invalid number of lines`;
        }

        const { node } =
            getFile(filename);

        if (!node) {
            return `${command}: ${filename}: No such file or directory`;
        }

        if (node.type !== "file") {
            return `${command}: ${filename}: Is a directory`;
        }

        const lines =
            (node.content || "")
                .split("\n");

        if (command === "head") {
            return lines
                .slice(0, linesCount)
                .join("\n");
        }

        return lines
            .slice(-linesCount)
            .join("\n");
    }

    // =========================
    // ENV
    // =========================

    function executeEnv() {
        return [
            "USER=cyberuser",
            "HOME=/home/cyberuser",
            "SHELL=/bin/bash",
            "TERM=cyberverse",
            "HOSTNAME=cyberverse",
            "PATH=/usr/local/bin:/usr/bin:/bin",
            `PWD=${currentPath}`,
        ].join("\n");
    }

    // =========================
    // CHMOD
    // =========================

    function executeChmod(args) {
        if (!args[0] || !args[1]) {
            return "chmod: usage: chmod <permissions> <file>";
        }

        const permissions =
            args[0];

        const filename =
            args[1];

        if (
            !/^[0-7]{3}$/.test(
                permissions
            )
        ) {
            return "chmod: invalid permissions";
        }

        const filePath =
            resolvePath(filename);

        const node =
            getNode(filePath);

        if (!node) {
            return `chmod: ${filename}: No such file or directory`;
        }

        updateFileSystem((fs) => {
            const parts =
                filePath
                    .split("/")
                    .filter(Boolean);

            let current = fs;

            for (
                const part of parts
            ) {
                if (
                    !current.children ||
                    !current.children[part]
                ) {
                    return;
                }

                current =
                    current.children[part];
            }

            current.permissions =
                permissions;
        });

        return "";
    }

    // =========================
    // PS
    // =========================

    function executePs() {
        return [
            "PID    USER        COMMAND",
            ...processes.map(
                (process) =>
                    `${process.pid.padEnd(7)}${process.user.padEnd(12)}${process.command}`
            ),
        ].join("\n");
    }

    // =========================
    // KILL
    // =========================

    function executeKill(args) {
        const pid =
            args[0];

        if (!pid) {
            return "kill: missing PID";
        }

        const process =
            processes.find(
                (item) =>
                    item.pid === pid
            );

        if (!process) {
            return `kill: (${pid}) - No such process`;
        }

        if (pid === "1") {
            return "kill: Operation not permitted";
        }

        setProcesses(
            (previous) =>
                previous.filter(
                    (item) =>
                        item.pid !== pid
                )
        );

        return `Process ${pid} terminated.`;
    }

    // =========================
    // HISTORY
    // =========================

    function executeHistory() {
        const commands =
            history.filter(
                (item) =>
                    item.type === "command"
            );

        return commands
            .map(
                (item, index) =>
                    `${index + 1}  ${item.command || item.text}`
            )
            .join("\n");
    }

    // =========================
    // COMMAND HANDLER
    // =========================

    function handleCommand(command) {
        const trimmedCommand =
            command.trim();

        if (!trimmedCommand) {
            return;
        }

        const parts =
            trimmedCommand.split(/\s+/);

        const cmd =
            parts[0].toLowerCase();

        const args =
            parts.slice(1);

        // =========================
        // SAVE COMMAND
        // =========================

        const newHistory = [
            ...history,
            {
                type: "command",

                text:
                    `${getPrompt()} ${trimmedCommand}`,

                command:
                    trimmedCommand,
            },
        ];

        let output = "";

        // =========================
        // HELP
        // =========================

        if (cmd === "help") {
            output =
                getHelp();
        }

        // =========================
        // CLEAR
        // =========================

        else if (cmd === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        // =========================
        // WHOAMI
        // =========================

        else if (cmd === "whoami") {
            output =
                "cyberuser";
        }

        // =========================
        // PWD
        // =========================

        else if (cmd === "pwd") {
            output =
                currentPath;
        }

        // =========================
        // LS
        // =========================

        else if (cmd === "ls") {
            output =
                executeLs(args);
        }

        // =========================
        // CD
        // =========================

        else if (cmd === "cd") {
            output =
                executeCd(args);
        }

        // =========================
        // CAT
        // =========================

        else if (cmd === "cat") {
            output =
                executeCat(args);
        }

        // =========================
        // MKDIR
        // =========================

        else if (cmd === "mkdir") {
            output =
                executeMkdir(args);
        }

        // =========================
        // TOUCH
        // =========================

        else if (cmd === "touch") {
            output =
                executeTouch(args);
        }

        // =========================
        // RM
        // =========================

        else if (cmd === "rm") {
            output =
                executeRm(args);
        }

        // =========================
        // ECHO
        // =========================

        else if (cmd === "echo") {
            output =
                executeEcho(
                    trimmedCommand
                );
        }

        // =========================
        // FIND
        // =========================

        else if (cmd === "find") {
            output =
                executeFind(args);
        }

        // =========================
        // GREP
        // =========================

        else if (cmd === "grep") {
            output =
                executeGrep(args);
        }

        // =========================
        // HEAD
        // =========================

        else if (cmd === "head") {
            output =
                executeHeadTail(
                    "head",
                    args
                );
        }

        // =========================
        // TAIL
        // =========================

        else if (cmd === "tail") {
            output =
                executeHeadTail(
                    "tail",
                    args
                );
        }

        // =========================
        // ENV
        // =========================

        else if (cmd === "env") {
            output =
                executeEnv();
        }

        // =========================
        // CHMOD
        // =========================

        else if (cmd === "chmod") {
            output =
                executeChmod(args);
        }

        // =========================
        // PS
        // =========================

        else if (cmd === "ps") {
            output =
                executePs();
        }

        // =========================
        // KILL
        // =========================

        else if (cmd === "kill") {
            output =
                executeKill(args);
        }

        // =========================
        // HISTORY
        // =========================

        else if (cmd === "history") {
            output =
                executeHistory();
        }

// =========================
// SUBMITFLAG
// =========================

else if (cmd === "submitflag") {

    if (!args[0]) {

        output =
            "submitflag: missing flag";

    } else {

        const submittedFlag =
            args.join(" ");

        const result =
            submitTerminalFlag(
                "terminal_file_discovery",
                submittedFlag
            );

        output =
            result.message;

        if (result.success) {

            output +=
                `\n+${result.challenge?.points || 100} points`;

            output +=
                `\n+${result.challenge?.xp || 100} XP`;

        }

    }
}


        // =========================
        // UNKNOWN COMMAND
        // =========================

        else {
            output =
                `Command not found: ${cmd}`;
        }

        // =========================
        // ADD OUTPUT
        // =========================

        if (output) {
            newHistory.push({
                type: "output",
                text: output,
            });
        }

        // =========================
        // UPDATE HISTORY
        // =========================

        setHistory(
            newHistory
        );

        // =========================
        // CLEAR INPUT
        // =========================

        setInput("");
    }

    // =========================
    // KEYBOARD
    // =========================

    function handleKeyDown(event) {
        if (
            event.key === "Enter"
        ) {
            handleCommand(input);
        }
    }

    // =========================
    // FOCUS TERMINAL
    // =========================

    function focusTerminal() {
        inputRef.current?.focus();
    }

    // =========================
    // RENDER
    // =========================

    return (
        <div
            className="cyber-terminal"
            onClick={focusTerminal}
        >
            {/* =========================
                TERMINAL HEADER
            ========================= */}

            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-dot red" />

                    <span className="terminal-dot yellow" />

                    <span className="terminal-dot green" />
                </div>

                <span className="terminal-title">
                    cyberverse@terminal
                </span>
            </div>

            {/* =========================
                TERMINAL BODY
            ========================= */}

            <div className="terminal-body">
                {history.map(
                    (item, index) => (
                        <div
                            key={index}
                            className={
                                `terminal-line ${item.type}`
                            }
                        >
                            {item.text
                                .split("\n")
                                .map(
                                    (
                                        line,
                                        lineIndex
                                    ) => (
                                        <div
                                            key={
                                                lineIndex
                                            }
                                        >
                                            {line}
                                        </div>
                                    )
                                )}
                        </div>
                    )
                )}

                {/* =========================
                    INPUT
                ========================= */}

                <div className="terminal-input-line">
                    <span className="terminal-prompt">
                        {getPrompt()}
                    </span>

                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(event) =>
                            setInput(
                                event.target.value
                            )
                        }
                        onKeyDown={
                            handleKeyDown
                        }
                        autoComplete="off"
                        spellCheck="false"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
}

export default CyberTerminal;