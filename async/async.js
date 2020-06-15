function sum(x){
    return new Promise((resolve, reject)=>{

        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Parâmetro errado.');
        }

        setTimeout(()=>{
            resolve(x + 5000);
        },3000);
    }); 
}

async function main(){
    try{
        const result = await sum('#');
        console.log(result);
    }catch(err){
        console.log(err);
        console.log(process.env.USERNAME);
    }
}

main();