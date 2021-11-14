import React from 'react'
import CardItem from './cardItem';
import './cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Programación en CANAL 71</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-9/50314368_1285442118262545_6294342286742388736_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Oyg1pAkwLBUAX_LUvMF&tn=K5_Yfr50MgD0dwXi&_nc_ht=scontent.fmga3-1.fna&oh=4121c1f8cec1783b93a4692e76f44d99&oe=61A92D12'
                        text='Fiesta patronales de la ciudad de Acoyapa'
                        label='Alegría'
                        path='/'
                        />
                        <CardItem 
                        src='https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-9/40877338_1194427544030670_6784298283125702656_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=HF-no-4xpnAAX8pZJQU&tn=K5_Yfr50MgD0dwXi&_nc_ht=scontent.fmga3-1.fna&oh=d1f047240c346cc65906d1dcbc6b3be3&oe=61AB8FEF'
                        text='Fiesta patrias de la ciudad de Acoyapa'
                        label='Simbolos Patrios'
                        path='/'
                        />
                        <CardItem 
                        src='https://scontent.fmga3-1.fna.fbcdn.net/v/t31.18172-8/15326271_799400760200019_7526727103202857944_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=5d4-8WMLqGQAX_3VTyl&_nc_oc=AQnuGfREFQpjYFSirA8CxPg4bpBwEZbjPNlJJeEGjLj0iqNHyw7L6vKtydHg_hnsRkw&tn=K5_Yfr50MgD0dwXi&_nc_ht=scontent.fmga3-1.fna&oh=b29e54a0c51d6942cee93ab5f9ee6093&oe=61AF1FF5'
                        text='Ceremonia de bachilleres'
                        label='Bachillerato'
                        path='/'
                        />
                        
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;
