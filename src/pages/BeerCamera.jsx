import React, { useState } from 'react'
import axios from 'axios'

export function BeerCamera() {
    const [image, setImage] = useState(undefined);

    const onChange = (e) => {
        const img = e.target.files[0]        
        const object = URL.createObjectURL(img)
        setImage(object)
    }
    async function onButtonClick(e) {
        if (image === undefined) {
            window.alert("이미지 넣어주세요")
            return false;
        }
        console.log(image.name)
        const response = await axios({
                    url: `/beers?count=3`,
                    method: "GET",
                    headers: {"Access-Control-Allow-Origin": "*"},
                    baseURL: 'http://13.125.229.199:8080',
                    withCredentials: false,
                })
        const data = response.data[0]
        console.log(data);
        setTimeout(() => {
            window.location.href = `/detail?itemID=${data.id}&title=${data.name}&des=${data.des}&image=${data.image}&rate=${data.rate}`;
        }, 3000)
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', "alignItems": 'center', marginTop: '50px'}}>
            <div>
                <h3>사진을 업로드하고 맥주를 확인해보세요!</h3>
            </div>
            <img src={image} width={'500px'} height={'500px'} />
            <input
                id='hello'
                style={{marginTop: '20px'}}
                type='file' 
                accept='image/jpg,impge/png,image/jpeg,image/gif,image/*' 
                name='profile_img' 
                onChange={onChange} />
            <input type={'button'} style={{width: '600px', height: '70px', marginTop: '50px', fontSize: '30px', fontStyle: 'bold'}} value={"맥주 검색하기"} onClick={onButtonClick}/>
        </div>
    )
}