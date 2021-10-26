function GetSubtitle(){
    const birth = parseInt(new Date('August 07, 2003 00:01').getFullYear());
    const currentYear = parseInt(new Date().getFullYear());
    const text = `${(currentYear - birth)} Years // Dutch`;
    document.write(text);
}

function GetDiscription() {
    let insert = "";
    const start = parseInt(new Date('August 01, 2020 00:01').getFullYear());
    const current = parseInt(new Date().getFullYear());
    let diff = current - start;
    if(diff === 1) insert = "sophomore";
    else if(diffx === 2) insert = "junior";
    else if(diff === 3) insert = "senior";
    else if(diff > 4) insert = "graduated";

    document.write(`I am a ${insert} computer science student at Fonty's University of Applied Sciences.`)
}