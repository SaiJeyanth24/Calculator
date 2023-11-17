let digits = document.querySelector('.digits');
let left=0;
let leftflag=true;
let right=0;
let operator='';
let operatorFlag=false;

const operandListener =(value)=>{

    if(digits.textContent==='0'|| operatorFlag===true){
        digits.textContent=value;
        (operatorFlag)?operatorFlag=false:'';
    }
    else
    digits.textContent+=value;
}

const operatorListener = (value) =>{
    document.querySelector('.operator').textContent=value;
    left=Number(digits.textContent);
    operator=value;
    operatorFlag=true;
}

const resetListener = () =>{
    digits.textContent='0';
    document.querySelector('.operator').textContent='';
    left=0;
    right=0;
}

const deleteListener = () =>{
    if(digits.textContent.length===1)
    digits.textContent='0';
    else
    digits.textContent=digits.textContent.substring(0,digits.textContent.length-1);

}

const specialListener = (value)=>{
    if(value==='-1')
    digits.textContent=Number(digits.textContent)*-1;
    else
    digits.textContent+='.';
}

const checkDecimal =() =>{
    if(left%1!==0||right%1!==0)
    return true;
    else
    return false;
}

const resultListener = () =>{
    document.querySelector('.operator').textContent='=';
    right=Number(digits.textContent);
    switch(operator){
        case '+': {
            if(!checkDecimal())
            digits.textContent=left+right;
            else
            digits.textContent=(left+right).toFixed(3);
            break;
        }
        case '-': {
            if(!checkDecimal())
            digits.textContent=left-right;
            else
            digits.textContent=(left-right).toFixed(3);
            break;
        }
        case '/': {
            if(right===0)
            digits.textContent='infinity';
            else if(left%right!==0|| checkDecimal())
            digits.textContent=(left/right).toFixed(3);
            else
            digits.textContent=(left/right);
            break;
        }
        case '*': {
            if(!checkDecimal())
            digits.textContent=left*right;
            else
            digits.textContent=(left*right).toFixed(3);
            break;
        }
    }
}


document.querySelector('.zero').addEventListener('click',()=>{
    operandListener(document.querySelector('.zero').dataset.value);
});

document.querySelector('.one').addEventListener('click',()=>{
    operandListener(document.querySelector('.one').dataset.value);
});

document.querySelector('.two').addEventListener('click',()=>{
    operandListener(document.querySelector('.two').dataset.value);
});

document.querySelector('.three').addEventListener('click',()=>{
    operandListener(document.querySelector('.three').dataset.value);
});
    
document.querySelector('.four').addEventListener('click',()=>{
    operandListener(document.querySelector('.four').dataset.value);
});
    
document.querySelector('.five').addEventListener('click',()=>{
    operandListener(document.querySelector('.five').dataset.value);
});

document.querySelector('.six').addEventListener('click',()=>{
    operandListener(document.querySelector('.six').dataset.value);
});


document.querySelector('.seven').addEventListener('click',()=>{
    operandListener(document.querySelector('.seven').dataset.value);
});

document.querySelector('.eight').addEventListener('click',()=>{
    operandListener(document.querySelector('.eight').dataset.value);
});

document.querySelector('.nine').addEventListener('click',()=>{
    operandListener(document.querySelector('.nine').dataset.value);
});

document.querySelector('.dot').addEventListener('click',()=>{
    specialListener(document.querySelector('.dot').dataset.value);
});

document.querySelector('.sign').addEventListener('click',()=>{
    specialListener(document.querySelector('.sign').dataset.value);
});

document.querySelector('.plus').addEventListener('click',()=>{
    operatorListener(document.querySelector('.plus').dataset.value);
});

document.querySelector('.minus').addEventListener('click',()=>{
    operatorListener(document.querySelector('.minus').dataset.value);
});

document.querySelector('.division').addEventListener('click',()=>{
    operatorListener(document.querySelector('.division').dataset.value);
});

document.querySelector('.multiply').addEventListener('click',()=>{
    operatorListener(document.querySelector('.multiply').dataset.value);
});

document.querySelector('.delete').addEventListener('click', deleteListener);

document.querySelector('.result').addEventListener('click', resultListener);

document.querySelector('.C').addEventListener('click', resetListener);






