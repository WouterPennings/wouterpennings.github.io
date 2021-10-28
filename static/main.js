function GetAge() {
    const today = new Date();
    const birth = new Date('2003/08/07');

    const m = today.getMonth() - birth.getMonth();
    const d = today.getDate() - birth.getDate();

    let y = today.getFullYear() - birth.getFullYear();
    if (m < 0 || (m === 0 && d < 0)) y--;

    return y;
}

function GetSubtitle(){
    const text = `${GetAge()} Years // Dutch`;
    document.write(text);
}

function GetDiscription() {
    let insert = "";
    const start = parseInt(new Date('August 01, 2020 00:01').getFullYear());
    const current = parseInt(new Date().getFullYear());
    let diff = current - start;
    if(diff === 1) insert = "sophomore";
    else if(diff === 2) insert = "junior";
    else if(diff === 3) insert = "senior";
    else if(diff > 4) insert = "graduated";

    let x = `I am a ${insert} computer science student at Fonty's University of Applied Sciences.`;
    console.log(x);
    return x;
}
