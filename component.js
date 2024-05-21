import { 
	DomType,
	sydDOM,
	setStyle,
	styleComponent,
	mount,
	createElement,
	preState,
} from "./sydneyDom.js";

import {} from './introPage.js'
import {} from './aboutPage.js'
import {} from './games.js'
import {} from './roadMap.js'
import {} from './contact.js'

setStyle([
	{
		nameTag:'container',
		style:{
			height:'100vh',
			width:'100vw',
			overflowX:'hidden',
			overflowY:'scroll',
			background:"rgb(11, 64, 111)",//#001951
			position:'relative',
			paddingTop:'70px',
			fontFamily:'"Courier Prime", monospace'
		}
	},
	{
		nameTag:'clPack1',
		style:{
			background:'#011245cc',
			color:'#e3effa'
		}
	},
	{
		nameTag:'btnPack',
		style:{
			background:'rgb(26, 147, 255)',
			padding:'10px 15px'
		}
	},
	{
		nameTag:'flexPack',
		style:{
			display:'flex',
			justifyContent:'center',
			alignItems:'center'
		}
	}
])

sydDOM.container = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.container()
		},
		[
			sydDOM.topNav(),
			sydDOM.introPage(),
			sydDOM.aboutPage(),
			sydDOM.games(),
			sydDOM.roadMap(),
			sydDOM.contact()
		]
	)
}

sydDOM.topNav = () =>{
	return createElement(
		'div',
		{
			style:'height:70px;width:100%;z-index:999;border-bottom:2px solid rgb(26, 147, 255);position:fixed;top:0;font-weight:900;left:0;padding:0 15px;box-shadow:0 0 5px #000;'+styleComponent.clPack1()+styleComponent.flexPack({method:'add',style:{
				justifyContent:'space-between'
			}})
		},
		[
			createElement(
				'h1',
				{style:'font-weight:300;font-size:50px;display:flex;justify-content:center;align-items:center;column-gap:10px;font-size:50px;font-family:"Jacquard 24", system-ui;color:rgb(26, 147, 255)'},
				[
					'BBC',
					createElement('div',{class:'commonImg',style:'height:40px;width:40px;background-image:url("coin.png")'})
				]
			),
			sydDOM.botBtn()
		]
	)
}

sydDOM.botBtn = () =>{
	return createElement(
		'a',
		{
			style:'display:flex;justify-content:center;align-items:center;column-gap:10px;height:40px;min-width:100px;padding:0 10px;text-decoration:unset;color:#e3effa;' + styleComponent.btnPack({method:'remove',style:['padding']}),
			class:'btn',
			href:botLink
		},
		[
			createElement('i',{class:''}),
			'BBC Bot'
		]
	)
}

mount(sydDOM.container())