	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="clear";bookConfig.loadingCaptionColor="#004080";bookConfig.loadingPicture="files/mobile-ext/loadingPicture.png";bookConfig.loadingBackground="#FFFFFF";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#004080";bookConfig.iconColor="#FFFFFF";bookConfig.pageNumColor="#004080";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#004080";bookConfig.ToolBarAlpha="100";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="true";bookConfig.InstructionsButtonVisible="Hide";bookConfig.showInstructionOnStart="Yes";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Hide";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.isInsertFrameLinkEnable=" Hide";bookConfig.addCurrentPage="Yes";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#004080";bookConfig.thumbnailAlpha="0";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="No";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Hide";bookConfig.FlipSound="No";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="6";bookConfig.autoPlayLoopCount="-1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="0";bookConfig.defaultZoomWidth="0";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Show";bookConfig.DownloadButtonVisible="Show";bookConfig.enableDownload="Yes";bookConfig.DownloadURL="files/downloads/COPERTINE 18TH.pdf";bookConfig.PhoneButtonVisible="Show";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Hide";bookConfig.MagnifierButtonVisible="Show";bookConfig.bgBeginColor="#FFFFFF";bookConfig.bgEndColor="#FFFFFF";bookConfig.bgMRotation="90";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="0";bookConfig.LeftShadowAlpha="0.5";bookConfig.RightShadowWidth="0";bookConfig.RightShadowAlpha="0.5";bookConfig.ShowTopLeftShadow="No";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="1";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="No";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#FFFFFF";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="Yes";bookConfig.isSingleBookFullWindowOnMobile="yes";bookConfig.isStopMouseMenu="no";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="yes";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#676048";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=19;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=682;;bookConfig.securityType="1";bookConfig.CreatedTime ="250612152452";bookConfig.bookTitle="Copertine 18th";bookConfig.bookmarkCR="5fd15eb4a2ceec7df9125cb363eda826d8b1e06e";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Italian",btnFirstPage:"Prima",btnNextPage:"Pagina Successiva",btnLastPage:"Ultima",btnPrePage:"Pagina Precedente",btnDownload:"Scaricare",btnPrint:"Stampa",btnSearch:"Cerca",btnClearSearch:"Annulla",frmSearchPrompt:"Pulisci il pulsante di ricerca",btnBookMark:"Indice dei contenuti",btnHelp:"Aiuto",btnHome:"Pagina iniziale",btnFullScreen:"Abilita Schermo Intero",btnDisableFullScreen:"Disabilita Schermo Intero",btnSoundOn:"Suono abilitato",btnSoundOff:"Suono disabilitato",btnShareEmail:"Condividi",btnSocialShare:"Condividi sui Social ",btnZoomIn:"Zoom +",btnZoomOut:"Zoom -",btnDragToMove:"Modalità Drag move",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Ferma Auto Flip",btnGoToHome:"Torna alla Home page",frmHelpCaption:"Aiuto",frmHelpTip1:"Aiuto",frmHelpTip2:"Aiuto",frmPrintCaption:"Stampa",frmPrintBtnCaption:"Stampa",frmPrintPrintAll:"Stampa Tutte le Pagine",frmPrintPrintCurrentPage:"Stampa la Pagina Corrente",frmPrintPrintRange:"Stampa un Intervallo",frmPrintExampleCaption:"Esempio: 2,5,8-26",frmPrintPreparePage:"Sto preparando la pagina:",frmPrintPrintFailed:"Stampa Fallita:",pnlSearchInputInvalid:"(Lunghezza minima richiesta è 3 simboli)",loginCaption:"Login",loginInvalidPassword:"Password non valida!",loginPasswordLabel:"Password:",loginBtnLogin:"Accesso",loginBtnCancel:"Annulla",btnThumb:"Anteprima",lblPages:"Pagine:",lblPagesFound:"Pagine:",lblPageIndex:"Pagina",btnAbout:"Su di noi",frnAboutCaption:"Chi siamo",btnSinglePage:"Pagina Singola",btnDoublePage:"Pagina Doppia",btnSwicthLanguage:"Scegli la Lingua",tipChangeLanguage:"Seleziona una lingua",btnMoreOptionsLeft:"Più opzioni",btnMoreOptionsRight:"Più opzioni",btnFit:"Aggiusta finestra",smallModeCaption:"Clicca per vedere a schermo intero",btnAddAnnotation:"Aggiungi Note",btnAnnotation:"Nota",FlipPageEditor_SaveAndExit:"Salva e Esci",FlipPageEditor_Exit:"Esci",DrawToolWindow_Redo:"Rifare",DrawToolWindow_Undo:"Annulla",DrawToolWindow_Clear:"Cancella",DrawToolWindow_Brush:"Spazzola",DrawToolWindow_Width:"Larghezza",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Colore",DrawToolWindow_Eraser:"Gomma",DrawToolWindow_Rectangular:"Rettangolare",DrawToolWindow_Ellipse:"Ellisse",TStuff_BorderWidth:"Bordo Larghezza",TStuff_BorderAlph:"Bordo Alpha",TStuff_BorderColor:"Colore Testo",DrawToolWindow_TextNote:"Nota Testo",AnnotMark:"Segnalibro",lastpagebtnHelp:"Ultima pagina",firstpagebtnHelp:"Prima pagina",homebtnHelp:"Ritorna alla Home page",aboubtnHelp:"Su di noi",screenbtnHelp:"Aprire l'applicazione in modalità schermo intero",helpbtnHelp:"Mostra aiuto",searchbtnHelp:"Ricerca da pagine",pagesbtnHelp:"Guarda la miniatura di questa brochure",bookmarkbtnHelp:"Aprire Segnalibro",AnnotmarkbtnHelp:"Aprire Indice dei contenuti",printbtnHelp:"Stampa la brochure",soundbtnHelp:"Attiva o disattiva audio",sharebtnHelp:"Invia email a",socialSharebtnHelp:"Condivisione sociale",zoominbtnHelp:"Zoom +",downloadbtnHelp:"Scarica questa brochure",pagemodlebtnHelp:"Cambia modalità Pagina singola e doppia",languagebtnHelp:"Cambia Lingua",annotationbtnHelp:"Aggiungi Nota",addbookmarkbtnHelp:"Aggiungi Segnalibro ",removebookmarkbtnHelp:"Rimuovi dai Segnalibri",updatebookmarkbtnHelp:"Aggiorna Segnalibro ",btnShoppingCart:"Carrello",Help_ShoppingCartbtn:"Carrello",Help_btnNextPage:"Prossima pagina",Help_btnPrePage:"Pagina precedente",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Ferma Auto Flip",btnaddbookmark:"Aggiungi",btndeletebookmark:"Cancella",btnupdatebookmark:"Aggiorna",frmyourbookmarks:"I tuoi Segnalibri",frmitems:"articoli",DownloadFullPublication:"Pubblicazione completa",DownloadCurrentPage:"Pagina attuale",DownloadAttachedFiles:"File allegati",lblLink:"condividi",btnCopy:"Copia",infCopyToClipboard:"Il tuo browser non supporta gli appunti.",restorePage:"Vuoi ripristinare la sessione precedente?",tmpl_Backgoundsoundon:"Suono background Attivo",tmpl_Backgoundsoundoff:"Suono background Disattivo",tmpl_Flipsoundon:"Suono Flip Attivo",tmpl_Flipsoundoff:"Suono Flip Disattivo",Help_PageIndex:"Numero della pagina attuale",tmpl_PrintPageRanges:"INTERVALLO PAGINE",tmpl_PrintPreview:"ANTEPRIMA",btnSelection:"Seleziona Testo",loginNameLabel:"Nome:",btnGotoPage:"Vai",btnSettings:"Impostazioni",soundSettingTitle:"Impostazioni Suono",closeFlipSound:"Chiudi Suono Flip",closeBackgroundSound:"Chiudi Suono Background",frmShareCaption:"Condividi",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copia",frmShareItemsGroupCaption:"Condivisione sociale",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Vai alla pagina",btnPageBack:"Indietro",btnPageForward:"Avanti",SelectTextCopy:"Copia Testo",selectCopyButton:"Copia",TStuffCart_TypeCart:"Carrello",TStuffCart_DetailedQuantity:"Quantità",TStuffCart_DetailedPrice:"Prezzo",ShappingCart_Close:"Chiudi",ShappingCart_CheckOut:"Check-Out",ShappingCart_Item:"Articolo",ShappingCart_Total:"Totale",ShappingCart_AddCart:"Aggiungi al carrello",ShappingCart_InStock:"Disponibile",TStuffCart_DetailedCost:"Costo di trasporto",TStuffCart_DetailedTime:"Tempi di consegna",TStuffCart_DetailedDay:"giorno/i",ShappingCart_NotStock:"Lo stock non è abbastanza",btnCrop:"Ritaglia",btnDragButton:"Trascina",btnFlipBook:"Flip Book",btnSlideMode:"Modalità Slide",btnSinglePageMode:"Modalità Pagina Singola",btnVertical:"Modalità Verticale",btnHotizontal:"Modalità Orizzontale",btnClose:"Chiudi",btnDoublePage:"Pagina Doppia",btnBookStatus:"Vista Libro",checkBoxInsert:"Inserisci Pagina attuale",lblLast:"Questa è l'ultima pagina.",lblFirst:"Questa è la prima pagina.",lblFullscreen:"Clicca per vedere a schermo intero",lblName:"Nome",lblPassword:"Password",lblLogin:"Accesso",lblCancel:"Annulla",lblNoName:"Il campo nome deve essere completato",lblNoPassword:"Il campo password deve essere completato",lblNoCorrectLogin:"Inserire un nome e una password corretti",btnVideo:"VideoGallery",btnSlideShow:"SlideShow",pnlSearchInputInvalid:"(Lunghezza minima richiesta è 3 simboli)",btnDragToMove:"Modalità Drag move",btnPositionToMove:"Muovi alla posizione del mouse",lblHelp1:"Trascina l'angolo della pagina",lblHelp2:"Doppio click per Zoom + o -",lblCopy:"Copia",lblAddToPage:"aggiungi a pagina",lblPage:"Pagina",lblTitle:"Titolo",lblEdit:"Modifica",lblDelete:"Cancella",lblRemoveAll:"Rimuovi tutti",tltCursor:"cursore",tltAddHighlight:"aggiungi evidenziatore",tltAddTexts:"aggiungi testi",tltAddShapes:"aggiungi forme",tltAddNotes:"aggiungi note",tltAddImageFile:"aggiungi file immagine",tltAddSignature:"aggiungi firma",tltAddLine:"aggiungi riga",tltAddArrow:"aggiungi freccia",tltAddRect:"aggiungi rettangolo",tltAddEllipse:"aggiungi ellisse",lblDoubleClickToZoomIn:"Doppio click per zoom +",frmShareCaption:"Condividi",frmShareLabel:"Condividi",frmShareInfo:"Puoi condividere questo documento sui social network cliccando il pulsante qui sotto.",frminsertLabel:"Aggiungi al sito",frminsertInfo:"Usa il codice sotto per incorporare il documento al tuo sito.",btnQRCode:"Clicca qui per scannerizzare codice QR",btnRotateLeft:"Ruota a sinistra",btnRotateRight:"Ruota a destra",lblSelectMode:"Seleziona la modalità di visualizzazione per favore.",frmDownloadPreview:"Anteprima",frmHowToUse:"Modulo \"Come utilizzare\"",lblHelpPage1:"Spostare il dito per far scorrere la pagina del libro.",lblHelpPage2:"Ingrandire utilizzando il gesto o fare doppio clic sulla pagina.",lblHelpPage3:"Fai clic per visualizzare la tabella dei contenuti, i segnalibri e condividi i tuoi libri con i social networks.",lblHelpPage4:"Aggiungi i segnalibri, utilizza la funzione di ricerca e sfoglia automaticamente il libro.",lblHelpPage5:"Apri le miniature per visualizzare tutte le pagine del libro.",TTActionQuiz_PlayAgain:"Vuoi riprodurre di nuovo?",TTActionQuiz_Ration:"Il tuo rapporto è",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",frmBookMark:"Segnalibri",btnFullscreen:"Schermo intero",btnMore:"Di più",frmPrintall:"Stampa tutte le pagine",frmPrintcurrent:"Stampa Pagina corrente",frmPrintRange:"Intervallo di stampa",frmPrintexample:"Esempio: 2,3,5-10",frmPrintbtn:"Stampa",frmaboutcaption:"Contatto",frmaboutcontactinformation:"Informazioni di contatto",frmaboutADDRESS:"Indirizzo",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Sito Web",frmaboutMOBILE:"Cellulare",frmaboutAUTHOR:"Autore",frmaboutDESCRIPTION:"Descrizone",frmSearch:"Ricerca",frmToc:"Indice dei Contenuti",btnTableOfContent:"Mostra Indice dei Contenuti",lblDescription:"Titolo",frmLinkLabel:"collegamento",frmQrcodeCaption:"Eseguire la scansione del codice bidimensionale in basso per visualizzare con il telefono cellulare."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}