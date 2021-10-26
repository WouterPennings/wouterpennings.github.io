function GetSubtitle(){
    const birth = parseInt(new Date('August 07, 2003 00:01').getFullYear());
    const currentYear = parseInt(new Date().getFullYear());
    const text = `${(currentYear - birth)} Years // Dutch`;
    document.write(text);
}