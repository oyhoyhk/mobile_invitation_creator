import styled from '@emotion/styled'
import { CustomDivider } from '../Preview'
import useNaverMap from '../../../lib/hooks/useNaverMap'
import { useEffect, useRef } from 'react';

const buttons = [
    {
        img : 'kakao.png',
        name : '카카오내비'
    },
    {
        img : 'tmap.png',
        name : '티맵'
    },
    {
        img : 'naver_map.png',
        name : '네이버맵'
    }
]

export default function Location () {
    const naver = useNaverMap();
    const ref = useRef<HTMLDivElement>(null);
    console.log(naver);

    useEffect(()=>{
        if(!naver || !ref.current) return;
       new naver.maps.Map(ref.current, {
            center : new naver.maps.LatLng(37.5665, 126.9780),
            zoom:10
        })
    }, [naver])

    return <Container>
        <CustomDivider />
        <Text>로즈레터 호텔 10층 그랜드홀</Text>
        <CustomDivider style={{marginTop:'25px'}}/>
        <Text>서울시 서초구 로즈로</Text>
        <Text style={{marginTop:'10px'}}>Tel. 02-000-000</Text>
        <MapContainer ref={ref}/>
        <ButtonContainer>
            {buttons.map(info => <Button key={info.name}>
                <Icon img={info.img} />
                <span>{info.name}</span>
            </Button>)}
        </ButtonContainer>
    </Container>
}

const ButtonContainer = styled.div`
    width: 90%;
    height: 40px;
    border-radius:0.8rem;
    border:1px solid rgba(129, 122, 94, 0.3);
    background:#f5e3e2;
    margin: 0 auto;
    margin-top:25px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`

const Button = styled.div`
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#817A5E;
    font-size:0.9rem;
    position:relative;

    &:first-of-type, &:nth-of-type(2) {
        &::after {
            content : '';
            display:block;
            position:absolute;
            right:-12px;
            width:1px;
            height:20px;
            border-right:1px solid rgba(129, 122, 94, 0.3);
    }
}

`

const Icon = styled.div<{img :string}>`
    width:17px;
    height:17px;
    background-image:${({img}) => `url(${img})`};
    background-size:17px 17px;
    background-position:center 0.5px;
    background-repeat:no-repeat;
    margin-right:8px;
`

const MapContainer = styled.div`
    width:90%;
    height:320px;
    margin:0 auto;
    margin-top:25px;
    background:lightgray;
    border-radius:0.3rem;
    border: 1px solid lightgray;
`
const Text = styled.div`
    text-align:center;
    margin-top:25px;
`

const Container = styled.div`
    width:100%;
    margin :0 auto;
    margin-top:25px;
`