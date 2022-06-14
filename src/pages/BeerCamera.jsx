import React, { useState } from 'react'

export function BeerCamera() {
    const [image, setImage] = useState();

    const onChange = (e) => {
        const img = e.target.files[0]        
        const object = URL.createObjectURL(img)
        setImage(object)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', "alignItems": 'center', marginTop: '50px'}}>
            <div>
                <h3>사진을 업로드하고 맥주를 확인해보세요!</h3>
            </div>
            <img src={image} width={'500px'} height={'500px'} />
            <input 
                style={{marginTop: '20px'}}
                type='file' 
                accept='image/jpg,impge/png,image/jpeg,image/gif,image/*' 
                name='profile_img' 
                onChange={onChange} />
            <input type={'button'} style={{width: '600px', height: '70px', marginTop: '50px', fontSize: '30px', fontStyle: 'bold'}} value={"맥주 검색하기"} />
        </div>
    )
}