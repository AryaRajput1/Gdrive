import React from 'react'

function FileItem({name,date,size,url}) {
    const filename=`${date.toDate().getDate()} ${date.toDate.getMonth()}`;
    const filesize=(sizeInBytes)=>{
        let i=-1;
        const byteunits=['kb','mb','gb'];
        do{
            sizeInBytes=sizeInBytes/1024;
            i++;
        }while(sizeInBytes>1024)
return Math.max(sizeInBytes,0.1).toFixed(1)+byteunits[i];
    };
    return (
        <div>
            <div className='files'> 
                <p>No.</p>
                <a href={url}><p>{name}</p></a>
                    <p>{date}</p>
                    <p>{filesize(size)}</p>
                </div>
        </div>
    )
}

export default FileItem
