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
		nameTag:'roadMap',
		style:{
			height:'fit-content',
			width:'100%',
			minHeight:'300px',
			backgroundImage:'url("./road2.png")',
			padding:'10px',
			display:'flex',
			flexDirection:'column',
			alignItems:'center',
			rowGap:'20px'
		}
	}
])

sydDOM.roadMap = () =>{
    return createElement(
        'div',
		{
			style:styleComponent.roadMap(),
			class:'roadPage roadAnime'
		},
		[
			createElement(
                'h3',
                {
                    style:'color:rgb(26, 147, 255);text-transform:capitalize;text-shadow:2px 3px 2px #000'
                },
                [
                    'road map'
                ]
            ),
			sydDOM.tab(),
			sydDOM.btnTabsOne(),
			sydDOM.btnTabsTwo()
		]
    )
}

sydDOM.tab = () =>{
	return createElement(
		'div',
		{
			style:'min-height:fit-content;padding:10px;margin-bottom:30px;width:100%;max-width:600px;display:flex;flex-direction:column;row-gap:10px'
		},
		[
			sydDOM.roadMapTabs({text:[`Launch $BBC  - Setup socials (TG, X, Web) - Initial Marketing`,`First game release`]}),
			sydDOM.roadMapTabs({text:[`Dextools/CMC/CG`,`Engaging users to familiarize them with the game. (AMA) `,`Contest  giveaway`,`Engagement with local communities and influencers for regional growth`]}),
			sydDOM.roadMapTabs({text:[`Collecting feedback and improving the platform based on user input`,`More game release `,`Further marketing`,`referral programs to incentivize user growth`]}),
			sydDOM.roadMapTabs({text:[`Blue base web3 meme casino`]})
		]
	)
}

sydDOM.roadMapTabs = ({text}) =>{
	const children = () =>{
		const array = [];

		text.forEach(val =>{
			array.push(
				createElement('li',{},[val])
			)
		})

		return array
	}

	return createElement(
		'div',
		{
			style:'height:fit-content;padding:10px;border-radius:15px;color:#fff;list-style-type: square;font-weight:800;box-shadow: -3px 3px 0px rgb(2, 76, 142,.7);background:rgb(26, 147, 255,.7);'
		},
		[
			...children()
		]
	)
}

sydDOM.btnTabsOne = () =>{
	return createElement(
		'div',
		{
			style:'height:fit-content;min-height:60px;width:100%;background:#011245;max-width:900px;border-radius:5px;display:flex;justify-content:space-between;align-items:center;padding:0 10px;text-transform:capitalize'
		},
		[
			createElement('p',{style:'color:#fff;'},['no token ? - no problem, buy some BBC token on uniswap']),
			sydDOM.tabsBtn('https://app.uniswap.org/?chain=base','Buy Token')
		]
	)
}

sydDOM.btnTabsTwo = () =>{
	return createElement(
		'div',
		{
			style:'height:fit-content;min-height:60px;width:100%;background:#011245;max-width:900px;border-radius:5px;display:flex;justify-content:space-between;align-items:center;padding:0 10px;text-transform:capitalize'
		},
		[
			createElement('p',{style:'color:#fff;'},['create wallet - click start to auto create wallet with BBC bot']),
			sydDOM.tabsBtn(botLink,'Wallet')
		]
	)
}

sydDOM.tabsBtn = (url,text) =>{
	return createElement(
		'a',
		{
			style:styleComponent.btnPack({method:'remove',style:['padding']}) + 'display:flex;justify-content:center;align-items:center;column-gap:10px;height:fit-content;min-width:120px;font-size:14px;padding:10px 10px;font-weight:700;color:#e3effa;text-decoration:unset',
			class:'btn',
			href:url
		},
		[
			createElement('i',{class:''}),
			text
		]
	)
}