import React from 'react'

function FileItem({name,date,size,url,num}) {
    const filedate=`${date.toDate().getDate()} `;
    const filesize=(size)=>{
        let i=0;
        const byteunits=['b','kb','mb','gb'];
        while(size>1024){
            size/=1024;
            i++;
        }
return size.toFixed(1)+byteunits[i];
    };
    return (
        
            <div className='files'> 
                <p>{num}</p>
                <a href={url}><p>{name}</p></a>
                    <p>{filedate}</p>
                    <p>{filesize(size)}</p>
                </div>
        
    )
}

export default FileItem
