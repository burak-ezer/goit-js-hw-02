function checkForSpam(message) {
    if(message.toLowerCase().search("spam")!=-1||message.toLowerCase().search("sale")!=-1){
        return true;
        
    }else {
        return false;
    }
}