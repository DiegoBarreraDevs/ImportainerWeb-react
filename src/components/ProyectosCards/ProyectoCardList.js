import React from 'react'
import './ProyectoCardList.css'
import ProyectoCard from './ProyectoCard'

const ProyectoCardList = () => {
    return (
        <div className="ProyCardList">
            <ProyectoCard
                title="Emprendimientos"
                img="https://live.staticflickr.com/65535/51674609153_83db79f768_z.jpg"
                link="./emprendimientos"
            />
            <ProyectoCard
                title="Casas"
                img="https://live.staticflickr.com/65535/51632074362_f4bbbd2469_z.jpg"
                link="./casas"
            />
            <ProyectoCard
                title="Exterior"
                img="https://live.staticflickr.com/65535/51675358599_76ebbb11fa_z.jpg"
                link="./exterior"
            />
            <ProyectoCard
                title="Oficinas"
                img="https://live.staticflickr.com/65535/51687394575_8cf07a9134_z.jpg" 
                link="./oficinas"
            />
        </div>
    )
}

export default ProyectoCardList

