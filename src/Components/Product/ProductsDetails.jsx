import React from 'react'
import JS20108 from '../../Assets/JS20108.png'
import JS20208 from '../../Assets/JS20208.png'
import JS20308 from '../../Assets/JS20308.png'
import JS30108 from '../../Assets/JS30108.png'
import JS30208 from '../../Assets/JS30208.png'
import JS30308 from '../../Assets/JS30308.png'
import JSGS01 from '../../Assets/JS-GS01-Steamer.png'
import JSGS02 from '../../Assets/JS-GS02.png'
import Trolley from '../../Assets/Trolley.png'
import thirdgen from '../../Assets/thirdgen.png'
import fourth from '../../Assets/fourth.png'

const ProductsDetails = () => {
    return [
        {
            id: "1",
            title: "JS20108",
            category: "Bun Tray",
            img: JS20108,
            desc: "Aluminized Steel Hot Dog Bun Tray (15 Grooves)"
        }, {
            id: "2",
            title: "JS20208",
            category: "Bun Tray",
            img: JS20208,
            desc: "Aluminized Steel Hot Dog Bun Tray (15 Grooves)"
        }, {
            id: "3",
            title: "JS20308",
            category: "Bun Tray",
            img: JS20308,
            desc: "Aluminized Steel Burger Bun Tray (15 Grooves)"
        }, {
            id: "4",
            title: "JS30108",
            category: "Bun Tray",
            img: JS30108,
            desc: "Aluminized Steel long Bun Tray (18 Grooves)"
        }, {
            id: "5",
            title: "JS30208",
            category: "Bun Tray",
            img: JS30208,
            desc: "Aluminized Steel long Bun Tray (12 Grooves)"
        }, {
            id: "6",
            title: "JS30308",
            category: "Bun Tray",
            img: JS30308,
            desc: "Aluminized Steel long Bun Tray (7 Grooves)"
        }, {
            id: "7",
            title: "JSGS01",
            category: "Steamer",
            img: JSGS01,
            desc: "Single Door Type Steamer with Trolley (Gas heated steamer)"
        }, {
            id: "8",
            title: "JSGS01",
            category: "Steamer",
            img: JSGS02,
            desc: "Single Door Type Steamer with Trolley (Gas heated oil insulated steamer)"
        }, {
            id: "9",
            title: "JS-T101",
            category: "Trolley",
            img: Trolley,
            desc: "Bakery Trolley (For 600 x 400 baking tray)"
        }, {
            id: "10",
            title: "JS-T102",
            category: "Trolley",
            img: Trolley,
            desc: "Bakery Trolley (For 720 x 460 baking tray)"
        },
        {
            id: "11",
            title: "JSGS02",
            category: "Steamer",
            img: thirdgen,
            desc: "Third gen Multipurpose Steamer with Trolley"
        },
        {
            id: "12",
            title: "JSGS03",
            category: "Steamer",
            img: fourth,
            desc: "Fourth Gen Multipurpose Steamer with Trolley"
        }
    ]
}

export default ProductsDetails
