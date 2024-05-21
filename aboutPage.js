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
		nameTag:'aboutPage',
		style:{
			minHeight:'100%',
			height:'fit-content',
			width:'100%',
			backgroundImage:'url("./about.png")',
			display:'flex',
			alignItems:'center',
			flexDirection:'column',
			justifyContent:'center',
			rowGap:'50px'
		}
	}
])

sydDOM.aboutPage = () =>{
    return createElement(
        'div',
		{
			style:styleComponent.aboutPage(),
			class:"aboutPage cloudLikeAnime"
		},
		[
			createElement(
                'h3',
                {
                    style:'color:rgb(26, 147, 255);text-transform:capitalize;text-shadow:2px 3px 2px #000'
                },
                [
                    'About'
                ]
            ),
			sydDOM.aboutText()
		]
    )
}

sydDOM.aboutText = () =>{
	return createElement(
		'div',
		{
			style:'height:100%;width:100%;text-align:left;max-width:700px;color:rgb(26, 147, 255);font-weight:900;'+styleComponent.flexPack([{
				method:'use',style:['display','alignItems','justifyContent']
			},
			{
				method:'add',style:{
					rowGap:'20px',
					flexDirection:'column',
					padding:'20px 20px',     
					// justifyContent:'center'
				}
			}])
		},
		[
			createElement('p',{style:'text-align:left',class:'abTxt'},[`Welcome to BlueBase Casino, the premier destination for thrilling Web3-based gambling on Telegram! Dive into a world where the excitement never stops and the possibilities are endless. As pioneers in Web3 technology on the Telegram platform, our casino bot offers a seamless and secure gaming environment where players can explore a diverse range of classic and innovative casino games. Whether you're a seasoned gambler or new to the scene, BlueBase Casino invites you to experience the ultimate gaming adventure, where fortune favors the bold and every bet is a chance to win big. Join us at BlueBase Casino and let the games begin!`]),
			createElement('li',{style:""},['Prepare to experience the thrill of a world-class casino right at your fingertips , @             will bring the electrifying energy of Las Vegas straight to you']),
			createElement('li',{style:""},['At $BBC Get ready for a world of endless excitement, where over 1000 games await your exploration']),
		]
	)
}