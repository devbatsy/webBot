import { 
	DomType,
	sydDOM,
	setStyle,
	styleComponent,
	mount,
	createElement,
	preState,
} from "./sydneyDom.js";

setStyle([
    {
        nameTag:'intPage',
        style:{
            height:'70%',
            width:'100%',
            position:'relative',
            marginBottom:'50px'
        }
    }
])

sydDOM.introPage = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.intPage()
        },
        [
            sydDOM.miniBgPage(),
            sydDOM.introCenter(),
        ]
    )
}

sydDOM.miniBgPage = () =>{
    return createElement(
        'div',
        {
            style:'height:100%;width:100%;position:absolute;top:0;left:0;z-index:500;display:flex;align-items:center;flex-direction:column;justify-content:flex-start;padding:10px 5px;color:#e3effa;row-gap:50px'
        },
        [
            
            createElement(
                'h1',
                {
                    style:'text-align:center;font-family: "Jacquard 24";font-weight:100;text-shadow:3px 5px 2px #000'
                },
                [
                    'Welcome To BBC',
                ]
            ),
            createElement(
                'h3',
                {
                    style:'color:rgb(26, 147, 255);text-transform:capitalize;text-shadow:2px 3px 2px #000'
                },
                [
                    '#1 in-telegram casino bot'
                ]
            )
        ]
    )
}

sydDOM.introCenter = () =>{
    return createElement(
        'div',
        {
            style:'height:100%;min-width:250px;width:100%;position:absolute;top:50%;left:50%;background-image:url("./join.png")',
            class:'intCenter commonImg'
        }
    )
}