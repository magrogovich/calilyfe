function alpha(ch){
    test=true
    l=ch.length
    for (i=0;i<l;i++){
        c=ch.charAt(i)
        if(!(c==" "||c>="a"&&c<="z"||c>="A"&&c<="Z")){
            test=false
            break
        }
    }
    return test
}
function verif(){
    fname=f.fname.value
    if(alpha(fname)==false ||fname.length==0){
        alert("First Name")
        return false
    }
    lname=f.lname.value
    if(alpha(lname)==false || f.lname.value.length==0){
        alert("Last Name")
        return false
    }
    if(f.uname.value.length==0){
        alert("user Name")
        return false
    }
    if(f.pwd.value.length<6){
        alert("pwd")
        return false
    }
    if(f.pwd.value!=f.cpwd.value){
        alert(" conf pwd")
        return false
    }
    if(!f.age.checked){
        alert("check age ")
        return false
    }
    if(!f.accept.checked){
        alert("check accept ")
        return false
    }
    console.log(fname,lname)
    return false
}