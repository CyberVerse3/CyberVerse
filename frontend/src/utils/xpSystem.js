export function getXP(){

    return Number(

        localStorage.getItem("xp")

    ) || 0;

}

export function addXP(amount){

    const current=getXP();

    const total=current+amount;

    localStorage.setItem(

        "xp",

        total

    );

    return total;

}

export function getLevel(){

    const xp=getXP();

    return Math.floor(xp/500)+1;

}