!function UD_SCOPE(){

    const Cls = (_a,_b) => (_b ? _b : document).getElementsByClassName(_a)[0];
    const Tag = (_a,_b) => (_b ? _b : document).getElementsByTagName(_a);
    const Id  = (_a,_b) => (_b ? _b : document).getElementById(_a);

    const Unico = Id('rastreio_unico').dataset;
	
	let Unico2 = Id('rastreio_unico').getAttribute("class");
	
	if(!!Unico2){
		Unico2 = !!Unico2 ? Unico2.split(",") : ['',''];	
		Unico.conta = Unico2[0];
		Unico.corbt = Unico2[1];
	}

    const dadospedido = !!Unico.dadospedido && Unico.dadospedido != 'block'
    const filtro = !!Unico.filtro && Unico.filtro != 'block'
    const icones = Unico.icones || '5'
    const importacao = Unico.importacao || 1

    const html = ''+
        '<main class="ud_rastreio">'+
        '    <div class="ud_aviso"></div>'+
        '    <form class="ud_form">'+
        '       <em id="ud_msg">Preencha este campo!</em>'+
        (filtro ? '' :
        '        <aside class="cfiltro1">'+
        '            <input type="text" id="ud_email" placeholder="E-mail/Telefone" title="Digite um e-mail válido">'+
        '            <input type="text" id="ud_pednumero" placeholder="Número do Pedido" title="Digite um número de pedido com mais de 10 caracteres">'+
        '            <button type="button" id="ud_btnlocal1">Localizar</button>'+
        '        </aside>'+
        '        <span class="filtrou">ou</span>'
        )+
        '        <aside class="cfiltro2">'+
        '            <input type="text" id="ud_codrastreio" autofocus placeholder="Número de Rastreio" title="Digite um número de rastreio válido">'+
        '            <button type="button" id="ud_btnlocal2">Localizar</button>'+
        '        </aside>'+
        '    </form>'+
        '    <section class="ud_detalhes">'+
        '        <a href="javascript:void(0)" id="ud_backbtn" target="_self">Voltar</a>'+
        '        <h1></h1>'+
        (dadospedido ? '' :
        '        <table>'+
        '            <thead>'+
        '                <tr>'+
        '                    <th>Endereço</th>'+
        '                    <th>Pedido</th>'+
        '                    <th class="hvalor">R$</th>'+
        '                </tr>'+
        '            </thead>'+
        '            <tbody>'+
        '                <tr>'+
        '                    <td></td>'+
        '                    <td></td>'+
        '                    <td class="hvalor"></td>'+
        '                </tr>'+
        '            </tbody>'+
        '        </table>'+
        '        <div class="ud_item"></div>'
        )+
        '        <article class="ud_passos">'+
        '            <hr class="ud_barra">'+ (icones == '5' ? '' : '<hr class="ud_barra2">')+
        '            <hr class="ud_progresso">'+ (icones == '5' ? '' : '<hr class="ud_progresso2">')+
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>'+
        '                <span></span>'+
        '                <em>Pedido realizado</em>'+
        '            </div>'+
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M12,20c5.514,0,10-4.486,10-10S17.514,0,12,0,2,4.486,2,10s4.486,10,10,10Zm0-18c4.411,0,8,3.589,8,8s-3.589,8-8,8S4,14.411,4,10,7.589,2,12,2Zm2,10c0-.379-.271-.698-.644-.761l-3.041-.506c-1.342-.224-2.315-1.374-2.315-2.733,0-1.654,1.346-3,3-3v-1h2v1c1.654,0,3,1.346,3,3h-2c0-.552-.449-1-1-1h-2c-.551,0-1,.448-1,1,0,.379,.271,.698,.644,.761l3.041,.506c1.342,.224,2.315,1.374,2.315,2.733,0,1.654-1.346,3-3,3v1h-2v-1c-1.654,0-3-1.346-3-3h2c0,.552,.449,1,1,1h2c.551,0,1-.448,1-1Zm10,8.5c0,1.93-1.57,3.5-3.5,3.5H3.5c-1.93,0-3.5-1.57-3.5-3.5,0-1.547,1.016-2.847,2.41-3.309,.495,.659,1.054,1.265,1.671,1.809h-.581c-.827,0-1.5,.673-1.5,1.5s.673,1.5,1.5,1.5H20.5c.827,0,1.5-.673,1.5-1.5s-.673-1.5-1.5-1.5h-.581c.618-.544,1.176-1.15,1.671-1.809,1.394,.461,2.41,1.762,2.41,3.309Z"/></svg>'+
        '                <span></span>'+
        '                <em>Pedido confirmado</em>'+
        '            </div>'+
        (icones == '5' ? '' :
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m19,1H5C2.243,1,0,3.243,0,6v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V6c0-2.757-2.243-5-5-5Zm3,17c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V6c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v12Zm-3-11c0,.552-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1Zm-11,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm11,5c0,.552-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1Zm-11,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm11,5c0,.552-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1h7c.552,0,1,.448,1,1Zm-11,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/></svg>'+
        '                <span></span>'+               
        '                <em>Pedido coletado</em>'+
        '            </div>'+
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M7,17c-.552,0-1-.449-1-1V3c0-1.654-1.346-3-3-3H0V2H3c.552,0,1,.449,1,1v13c0,1.439,1.018,2.643,2.371,2.933-.237,.472-.371,1.004-.371,1.567,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5c0-.536-.122-1.045-.338-1.5h4.677c-.217,.455-.338,.964-.338,1.5,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5c0-.536-.122-1.045-.338-1.5h.338v-2H7Zm4,3.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5,.673-1.5,1.5-1.5,1.5,.673,1.5,1.5Zm11,0c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5,.673-1.5,1.5-1.5,1.5,.673,1.5,1.5Zm-1-16.5h-1V2c0-1.103-.897-2-2-2h-4c-1.103,0-2,.897-2,2v2h-1c-1.654,0-3,1.346-3,3V15H24V7c0-1.654-1.346-3-3-3Zm-7-2h4v2h-4V2Zm4,4v7h-4V6h4Zm-8,1c0-.551,.448-1,1-1h1v7h-2V7Zm12,6h-2V6h1c.552,0,1,.449,1,1v6Z"/></svg>'+
        '                <span></span>'+
        '                <em>Pedido separado</em>'+
        '            </div>'+
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M19,6h-1.226c1.413-1.38,1.629-3.195,.545-4.64-.545-.728-1.34-1.198-2.239-1.326-.902-.131-1.795,.102-2.521,.646-.678,.508-1.178,1.155-1.547,1.813-.369-.659-.869-1.305-1.547-1.813C9.739,.135,8.844-.097,7.945,.034c-.899,.128-1.694,.599-2.239,1.326-1.078,1.437-.87,3.24,.547,4.64h-1.253C2.243,6,0,8.243,0,11v8c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V11c0-2.757-2.243-5-5-5Zm-4.24-3.72c.245-.184,.537-.28,.837-.28,.403,0,.898,.261,1.123,.56,.641,.854,.043,1.644-.343,2.013-1.561,1.385-3.217,1.427-3.358,1.428h-.013c.019-.091,.025-.186,.017-.283l-.002-.021c.089-.598,.461-2.458,1.739-3.416Zm-7.084,2.316c-.414-.395-1.011-1.182-.37-2.037,.225-.299,.552-.493,.922-.546,.373-.048,.739,.043,1.038,.267,1.279,.959,1.651,2.822,1.74,3.416l-.002,.021c-.008,.097-.002,.192,.017,.283h-.013c-.141,0-1.797-.042-3.332-1.403Zm-2.676,3.403h5.824c-.751,1.951-3.666,1.999-3.826,2-.552,0-.999,.448-.999,1s.448,1,1,1c1.417,0,3.697-.488,5-2.056,1.303,1.569,3.583,2.056,5,2.056,.552,0,1-.447,1-1s-.448-1-1-1c-.142,0-3.078-.026-3.827-2h5.827c1.654,0,3,1.346,3,3v6H2v-6c0-1.654,1.346-3,3-3Zm14,14H5c-1.654,0-3-1.346-3-3H22c0,1.654-1.346,3-3,3Z"/></svg>'+
        '                <span></span>'+
        '                <em>Pedido postado</em>'+
        '            </div>'+        
        (importacao == '1' ?
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M1.067,15.411l2.075,1.477c1.062,.755,2.317,1.14,3.572,1.14,.893,0,1.787-.195,2.612-.59l12.953-5.698c1.486-.71,2.133-2.504,1.441-4-.694-1.497-2.475-2.152-3.976-1.465l-3.143,1.402L9.982,3.591c-.882-.656-2.05-.774-3.052-.311l-.781,.366c-.611,.287-1.033,.857-1.129,1.525-.096,.669,.148,1.335,.654,1.783l4.204,3.72-3.591,1.602-3.057-1.122c-.984-.359-2.084-.041-2.735,.791-.392,.501-.556,1.132-.462,1.776,.099,.677,.475,1.292,1.033,1.688ZM7,5.457l.776-.364c.332-.154,.721-.113,1.085,.151l5.531,3.418-2.506,1.118L7,5.457ZM2.071,13.179c.098-.125,.224-.169,.334-.169,.05,0,3.574,1.285,3.574,1.285,.245,.09,.515,.081,.752-.025l13.833-6.171,.013-.006c.501-.231,1.096-.012,1.328,.487,.234,.507,.016,1.114-.46,1.342l-12.953,5.698c-1.357,.647-2.964,.51-4.191-.362l-2.075-1.476c-.114-.081-.193-.211-.213-.348-.015-.102,.005-.188,.058-.256Zm21.929,9.821c0,.553-.448,1-1,1H1c-.552,0-1-.447-1-1s.448-1,1-1H23c.552,0,1,.447,1,1Z"/></svg>'+
        '                <span></span>'+
        '                <em>Em exportação</em>'+
        '            </div>'+
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M2.293,8.224c.237,2.224,1.638,4.203,3.679,5.175l11.822,5.289c.402,.192,.831,.289,1.262,.289,.346,0,.691-.062,1.026-.187,.752-.279,1.344-.838,1.666-1.575,.661-1.511-.027-3.279-1.535-3.946l-2.321-1.07-1.514-8.22c-.099-1.094-.786-2.045-1.8-2.485l-.794-.338c-.619-.265-1.328-.2-1.891,.174-.562,.373-.896,.999-.894,1.67v6.024l-3.166-1.459-1.186-3.036c-.383-.976-1.341-1.601-2.405-1.524-.635,.039-1.216,.333-1.637,.831-.441,.522-.652,1.211-.58,1.893l.267,2.495ZM13,2.996l.788,.336c.336,.146,.565,.462,.61,.917l1.272,6.927-2.671-1.231V2.996ZM4.134,5.128c.066-.079,.144-.121,.23-.126h.031c.213,0,.343,.136,.39,.257l1.333,3.41c.095,.241,.278,.436,.513,.544,0,0,12.764,5.882,12.77,5.884,.505,.221,.736,.812,.516,1.316-.103,.235-.292,.414-.531,.502-.241,.09-.499,.077-.752-.042L6.811,11.584c-1.396-.666-2.365-2.035-2.529-3.573l-.267-2.495c-.015-.138,.03-.284,.119-.389ZM24,23c0,.552-.447,1-1,1H1c-.553,0-1-.448-1-1s.447-1,1-1H23c.553,0,1,.448,1,1Z"/></svg>'+
        '                <span></span>'+
        '                <em>Em importação</em>'+
        '            </div>' 
        : 
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M21,24c-1.654,0-3-1.346-3-3V13c0-.551-.448-1-1-1H7c-.552,0-1,.449-1,1v8c0,1.654-1.346,3-3,3s-3-1.346-3-3V9.724c0-1.665,.824-3.214,2.203-4.145L9.203,.855c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.379,.931,2.203,2.48,2.203,4.145v11.276c0,1.654-1.346,3-3,3ZM7,10h10c1.654,0,3,1.346,3,3v8c0,.551,.448,1,1,1s1-.449,1-1V9.724c0-.999-.494-1.929-1.322-2.487L13.678,2.513c-1.02-.688-2.336-.688-3.355,0L3.322,7.237c-.828,.558-1.322,1.488-1.322,2.487v11.276c0,.551,.448,1,1,1s1-.449,1-1V13c0-1.654,1.346-3,3-3Zm4,13v-2c0-.552-.447-1-1-1h-1c-.553,0-1,.448-1,1v2c0,.552,.447,1,1,1h1c.553,0,1-.448,1-1Zm0-6v-2c0-.552-.447-1-1-1h-1c-.553,0-1,.448-1,1v2c0,.552,.447,1,1,1h1c.553,0,1-.448,1-1Zm5,6v-2c0-.552-.447-1-1-1h-1c-.553,0-1,.448-1,1v2c0,.552,.447,1,1,1h1c.553,0,1-.448,1-1Z"/></svg>'+
        '                <span></span>'+
        '                <em>Centro de distribuição</em>'+
        '            </div>'+
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M3,2.5C3,1.119,4.119,0,5.5,0s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm15.5,2.5c1.381,0,2.5-1.119,2.5-2.5S19.881,0,18.5,0s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5ZM2.418,18.038c-.53-.147-1.084,.156-1.236,.688L.038,22.726c-.152,.53,.156,1.084,.687,1.236,.092,.025,.185,.038,.275,.038,.435,0,.835-.286,.961-.726l1.143-4c.152-.53-.156-1.084-.687-1.236Zm21.543,4.688l-1.143-4c-.151-.531-.705-.835-1.236-.688-.531,.152-.838,.705-.687,1.236l1.143,4c.125,.439,.526,.726,.961,.726,.091,0,.184-.013,.275-.038,.531-.152,.838-.705,.687-1.236Zm-1.824-6.712l-3.138,2.045v4.941c0,.553-.448,1-1,1s-1-.447-1-1v-5.483c0-.338,.171-.653,.454-.838l1.497-.975-1.633-6.115-1.317,2.22v2.691c0,1.379-1.122,2.5-2.5,2.5h-3c-1.378,0-2.5-1.121-2.5-2.5v-2.691l-1.311-2.211-1.589,6.137,1.446,.943c.283,.185,.454,.5,.454,.838v5.483c0,.553-.448,1-1,1s-1-.447-1-1v-4.941l-3.149-2.053C.463,15.129-.252,13.445,.083,11.824l.747-2.761c.36-1.75,1.973-3.063,3.82-3.063,1.376,0,2.666,.735,3.368,1.919l.957,1.614c.423-.329,.948-.533,1.525-.533h3c.577,0,1.102,.204,1.525,.533l.958-1.614c.701-1.184,1.991-1.919,3.367-1.919,1.848,0,3.46,1.313,3.834,3.123l.719,2.642c.349,1.681-.366,3.364-1.766,4.249ZM3.332,14.583l1.692-6.534c-.123-.025-.246-.049-.373-.049-.904,0-1.693,.643-1.875,1.527l-.747,2.761c-.154,.751,.204,1.593,.903,2.034l.401,.261Zm10.668-3.083c0-.275-.224-.5-.5-.5h-3c-.276,0-.5,.225-.5,.5v3c0,.275,.224,.5,.5,.5h3c.276,0,.5-.225,.5-.5v-3Zm7.958,.729l-.719-2.642c-.197-.944-.986-1.587-1.89-1.587-.127,0-.251,.025-.373,.049l1.737,6.505,.344-.224c.711-.449,1.068-1.291,.901-2.102Z"/></svg>'+
        '                <span></span>'+
        '                <em>Saída do centro de distribuição</em>'+
        '            </div>'
        )
        )+
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M19,5H17V4a3,3,0,0,0-3-3H3A3,3,0,0,0,0,4V19H2.041A3.465,3.465,0,0,0,2,19.5a3.5,3.5,0,0,0,7,0,3.465,3.465,0,0,0-.041-.5h6.082a3.465,3.465,0,0,0-.041.5,3.5,3.5,0,0,0,7,0,3.465,3.465,0,0,0-.041-.5H24V10A5.006,5.006,0,0,0,19,5Zm0,2a3,3,0,0,1,3,3v1H17V7ZM7,19.5a1.5,1.5,0,0,1-3,0,1.418,1.418,0,0,1,.093-.5H6.907A1.418,1.418,0,0,1,7,19.5ZM15,17H2V4A1,1,0,0,1,3,3H14a1,1,0,0,1,1,1Zm5,2.5a1.5,1.5,0,0,1-3,0,1.41,1.41,0,0,1,.093-.5h2.814A1.41,1.41,0,0,1,20,19.5ZM17,17V13h5v4Z"/></svg>'+
        '                <span></span>'+               
        '                <em>Em trânsito</em>'+
        '            </div>'+
        '            <div>'+
        '                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m18.5,5h-3c-1.379,0-2.5,1.122-2.5,2.5v3.5h-1.382l-1.369-2.739c-.697-1.395-2.1-2.261-3.659-2.261-1.979,0-3.59,1.611-3.59,3.604l.054,3.78c.02,1.394.744,2.654,1.938,3.371l2.524,1.518c.299.18.484.509.484.857v3.869c0,.552.447,1,1,1s1-.448,1-1v-3.869c0-1.046-.557-2.031-1.453-2.571l-2.525-1.519c-.596-.359-.958-.989-.968-1.686l-.054-3.766c0-.877.713-1.59,1.59-1.59.14,0,.277.014.41.04v4.96c0,.552.447,1,1,1s1-.448,1-1v-2.765l.829,1.658c.34.683,1.025,1.106,1.789,1.106h6.882c1.379,0,2.5-1.122,2.5-2.5v-3c0-1.378-1.121-2.5-2.5-2.5Zm.5,5.5c0,.276-.225.5-.5.5h-3.5v-3.5c0-.276.225-.5.5-.5h3c.275,0,.5.224.5.5v3ZM4,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm2,17.5v3c0,.552-.447,1-1,1s-1-.448-1-1v-3c0-.552.447-1,1-1s1,.448,1,1Z"/></svg>'+
        '                <span></span>'+
        '                <em>Saiu para entrega</em>'+
        '            </div>'+
        '            <div>'+
        '                <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m12 .007a10 10 0 0 0 -7.063 17.078l5.025 4.915h-4.962v2h14v-2h-4.962l5.033-4.923a10 10 0 0 0 -7.071-17.07zm5.665 15.648-5.665 5.545-5.657-5.537a8 8 0 1 1 11.322-.008zm-10.665-9.273v6.236l5 2.5 5-2.5v-6.236l-5-2.5zm8 5-3 1.5-3-1.5v-3.764l.118-.059 2.882 1.441 2.882-1.441.118.059z"/></svg>'+
        '                <span></span>'+
        '                <em>Pedido Entregue</em>'+
        '            </div>'+
        '        </article>'+
        '        <div class="ud_eventos">'+
        '            <ul></ul>'+
        '        </div>'+
        '    </section>'+
        '</main>';

    const classes = ''+
        '.ud_rastreio{'+
        '    box-sizing: border-box; margin: 0px auto; padding: 20px !important; width: 700px; font-family: sans-serif;'+
        '}'+
        '.ud_rastreio *{'+
        '    margin: 0px; padding: 0px; border:0px; font-family: sans-serif;'+
        '}'+
        '.ud_rastreio ::placeholder {'+
        '    color: #c9cccf;'+
        '}'+
        '.ud_rastreio :-ms-input-placeholder {'+
        '    color: #c9cccf;'+
        '}'+
        '.ud_rastreio ::-ms-input-placeholder {'+
        '    color: #c9cccf;'+
        '}'+
        '.ud_rastreio #ud_msg{'+
        '    display: block; position: absolute; border: 1px solid #cfc7c7; border-radius: 5px; padding: 10px; width: 170px; background-color: #fff;'+
        '    font-size: 14px; font-style: normal; color: #000; line-height: 100%; transition: opacity .3s ease-in-out; opacity: 0; box-shadow: 0 0 3px rgb(0 0 0 / 50%);'+
        '}'+
        '.ud_rastreio #ud_msg::after, .ud_rastreio #ud_msg::before{'+
        '   top: 100%; left: 50%; border: solid transparent; content: ""; height: 0; width: 0; position: absolute; pointer-events: none;'+        
        '}'+
        '.ud_rastreio #ud_msg::after{'+
        '   border-color: rgba(255, 255, 255, 0); border-top-color: #ffffff; border-width: 10px; margin-left: -10px;'+        
        '}'+
        '.ud_rastreio #ud_msg::before{'+
        '   border-color: rgba(0, 0, 0, 0); border-top-color: #cfc7c7; border-width: 12px; margin-left: -12px;'+        
        '}'+
        '.ud_rastreio .ud_aviso{'+
        '    display: none; box-sizing: border-box; border: 1px solid #f4e2e2; border-radius: 5px; padding: 20px; box-shadow: 0 0 3px rgb(0 0 0 / 7%);'+
        '    transition: opacity .3s ease-in-out; opacity: 0'+
        '}'+
        '.ud_rastreio form, .ud_rastreio section, .ud_rastreio div{'+
        '    box-sizing: border-box; display: flex; padding: 0px;'+
        '}'+
        '.ud_rastreio .hvalor{ text-align: right !important }'+
        '.ud_rastreio form{'+
        '    position: relative; flex-grow: 1; margin: 25px 0px; transition: opacity .3s;'+
        '}'+        
        '.ud_rastreio form img{'+
        '    transform: translateY(50%);' +
        '}'+
        '.ud_rastreio > div.ud_aviso{'+
        '    flex-basis: 100%;'+
        '}'+
        '.ud_rastreio form aside, .ud_rastreio section{'+
        '    flex-grow: 1; border: 1px solid #e9ecef; border-radius: 5px; padding: 20px; box-shadow: 0 0 3px rgb(0 0 0 / 7%);'+
        '}'+
        '.ud_rastreio form{'+
        '    justify-content: center; '+
        '}'+
        '.ud_rastreio form aside{'+
        '    max-width: 300px'+
        '}'+
        '.ud_rastreio form > span{'+
        '    width: 60px; text-align: center; color: #dfd7d7; line-height: 165px;'+
        '}'+
        '.ud_rastreio form aside input{'+
        '    display: block; flex-grow: 1; box-sizing: border-box; border: 1px solid #d9dcdf; border-radius: 3px; margin-bottom: 14px; padding: 10px;'+
        '    width: 100%; color: #000; outline: none; transition: border .3s ease-in-out;'+
        '}'+
        '.ud_rastreio form aside input:focus{'+
        '    border-color: #5a6d90;'+
        '}'+
        '.ud_rastreio form aside button{'+
        '    border: 0px; border-radius: 5px; padding: 10px 20px; background-color: '+ Unico.corbt +' !important; color: #fff; cursor: pointer;'+
        '    font-size: 11px !important; font-weight: bold; text-transform: uppercase;'+
        '    transition: opacity .15s ease-in-out;'+
        '}'+
        '.ud_rastreio form aside button:hover{'+
        '    opacity: .7'+
        '}'+
        '.ud_rastreio form aside button:disabled{'+
        '    opacity: .5; cursor: not-allowed'+
        '}'+
        '.udv_rastreio form aside button:not(:disabled):active{'+
        '    transform: translate(1px,1px);'+
        '}'+
        '.ud_rastreio section{'+
        '    display: none; position: relative; flex-direction: column; transition: opacity .3s; opacity: 0;'+
        '}'+
        '.ud_rastreio section h1{'+
        '    margin: 5px 0px 20px; font-size: 18px !important; color: #3f3737;'+
        '}'+
        '.ud_rastreio section table{'+
        '    margin-bottom: 20px;  border-collapse: collapse; box-shadow: none !important'+
        '}'+
        '.ud_rastreio section th, .ud_rastreio section div.ud_item span, .ud_rastreio section a{'+
        '    font-size: 10px; font-weight: bold; text-transform: uppercase; text-align: left; color: '+ Unico.corbt + ' !important;'+
        '}'+
        '.ud_rastreio section a{'+
        '     position: absolute !important; top: 30px; right: 20px; border: 0px !important; text-decoration: underline !important;'+
        '}'+
        '.ud_rastreio section th{'+
        '    color: #afa7a7 !important;'+
        '}'+
        '.ud_rastreio section th, .ud_rastreio section td{'+
        '    border: 0px solid !important; padding: 0px 30px 0px 0px !important; vertical-align: top; line-height: 20px;'+
        '}'+       
        '.ud_rastreio section td:last-child, .ud_rastreio section th:last-child{'+
        '    padding: 0px !important;'+
        '}'+
        '.ud_rastreio section th:first-child{'+
        '    width: 60% !important'+
        '}'+
        '.ud_rastreio section th:last-child, .ud_rastreio section td:last-child{'+
        '    text-align: right'+
        '}'+
        '.ud_rastreio section td, .ud_rastreio section div.ud_item, .ud_rastreio section li{'+
        '    font-size: 13px; color:#777'+
        '}'+
        '.ud_rastreio section div.ud_item{'+
        '    display: block; border: 1px solid #efe7e7; border-radius: 10px; padding: 14px; min-height: 71px;'+
        '}'+
		'.ud_rastreio section div.ud_item img{'+
        '    margin: 0px 10px 0px 0px !important; max-height:50px !important; max-width:50px !important'+
        '}'+
        '.ud_rastreio section div.ud_item hr{'+
        '    display: block; margin: 10px 0px 15px; border-bottom: 1px solid #efe7e7; width: 100%'+
        '}'+
        '.ud_rastreio section img{'+
        '    float: left; margin-right: 20px; margin-bottom: 15px; height: 50px;'+
        '}'+
        '.ud_rastreio section div.ud_item span{'+
        '    display: block; margin-bottom: 5px; color: #bfb7b7 !important; line-height: 70% !important'+
        '}'+
        '.ud_rastreio .ud_passos{'+
        '    position: relative; display: flex; flex-wrap: wrap; margin: 40px 0px; z-index: 0'+
        '}'+
        '.ud_rastreio .ud_passos > div{'+
        '    position: relative; flex-basis: 20%; display: block !important; margin-bottom: 30px; text-align: center;'+
        '}'+
        '.ud_rastreio .ud_passos hr{'+
        '    position: absolute; z-index: 102; top: calc('+(icones == '5' ? '40%' : (importacao == '1' ? '20%' : '18.7%'))+' + 5px); left: 60px; border-top: 2px solid #dfd7d7; width: calc(100% - 120px); height: 1px; max-width: unset !important'+
        '}'+
        '.ud_rastreio .ud_passos hr.ud_barra2, .ud_rastreio .ud_passos .ud_progresso2{'+
        '    top: calc(70% + '+ (importacao == '1' ? '5px' : '1px') +') !important;'+
        '}'+
        '.ud_rastreio .ud_passos .ud_progresso, .ud_rastreio .ud_passos .ud_progresso2{'+
        '    z-index: 102; border-color: '+ Unico.corbt + '; opacity: 0; transition: width .5s ease-out;'+
        '}'+
        '.ud_rastreio .ud_passos em{'+
        '    margin-top: 40px; display: block; padding: 0px 15px; font-size: 15px; font-weight: bold; color: #bfb7b7; text-align: center; line-height: 120%; font-style: normal;'+
        '}'+
        '.ud_rastreio .ud_passos span{'+
        '    position: absolute; z-index: 103; top: 50%; left: calc(50% - 5px); display: block; border-radius: 5px; width: 10px; height: 10px; '+
        '    transition: background-color .5s ease-out; background-color: #dfd7d7;'+
        '}'+
        '.ud_rastreio .ud_passos svg{'+
        '    width: 50px; height: 50px; vertical-align: middle; fill: #dfd7d7; overflow: hidden; transition: fill .5s ease-out;'+
        '}'+
        '.ud_rastreio .ud_passos > div.ativo em{'+
        '    color: '+ Unico.corbt + '; transition: color .5s ease-out;'+
        '}'+
        '.ud_rastreio .ud_passos > div.ativo hr{'+
        '    border-color: '+ Unico.corbt + ';'+
        '}'+
        '.ud_rastreio .ud_passos > div.ativo span{'+
        '    background-color: '+ Unico.corbt + ';'+
        '}'+
        '.ud_rastreio .ud_passos > div.ativo svg{'+
        '    fill: '+ Unico.corbt + ';'+
        '}'+
        '.ud_rastreio section .ud_eventos{'+
        '    position: relative;'+
        '}'+
        '.ud_rastreio section ul{'+
        '    padding: 0px 0px 0px 50px; width: 100%;'+
        '}'+
        '.ud_rastreio section li{'+
        '    position: relative; margin-bottom: 10px; border-bottom: 1px dotted #dfd7d7; padding-bottom: 10px; list-style: none; color: #777; list-style: none !important;'+
        '}'+
        '.ud_rastreio section li em{'+
        '    position: absolute; left: -38px; top: 30%; display: block; border-radius: 5px; width: 10px; height: 10px; background-color: '+ Unico.corbt + ';'+
        '}'+
        '.ud_rastreio section li div{'+
        '    position: absolute; left: -34px; top: calc(30% + 10px); display: block; border-left: 2px solid '+ Unico.corbt + '; width: 2px; height: 100%;'+
        '}'+
        '.ud_rastreio section li:last-child div{'+
        '    display: none;'+
        '}'+
        '.ud_rastreio section li span{'+
        '    display: block; color: #000; font-size: 14px; margin-right:5px;'+
        '}'+
        '.ud_rastreio section li:last-child{'+
        '    margin-bottom: 0px; border-bottom: 0px; padding-bottom: 0px;'+
        '}'+
        '@media only screen and (max-width: 600px) {'+
        '   .ud_rastreio form{'+
        '       margin: 10px 0px;'+
        '   }'+  
        '   .ud_rastreio {'+
        '       width: 100% !important; padding: 10px !important'+
        '   }'+
        '   .ud_rastreio form {'+
        '       flex-direction: column'+
        '   }'+
        '   .ud_rastreio form img{'+
        '       transform: translateY(34%) !important;' +
        '   }'+
        '   .ud_rastreio form > span {'+
        '       width: auto !important; flex-grow: 1; text-align: center @important; line-height: 60px !important;'+
        '   }'+
        '   .ud_rastreio section h1{'+
        '       margin: 0px 0px 15px !important; font-size: 22px !important;'+
        '   }'+
        '   .ud_rastreio section a{'+
        '       top: 20px;'+
        '   }'+
        '   .ud_rastreio section td, .ud_rastreio section div.ud_item, .ud_rastreio section li{'+
        '       font-size: 12px; line-height: 120%'+
        '   }'+
        '   .ud_rastreio section td, .ud_rastreio section th{'+
        '       padding-right: 10px'+
        '   }'+
        '   .ud_rastreio section td:last-child, .ud_rastreio section th:last-child{'+
        '       width: 50px;'+
        '   }'+
        '   .ud_rastreio .ud_passos{'+
        '       margin: 20px 0px 22px;'+
        '   }'+
        '   .ud_rastreio .ud_passos em{'+
        '       margin-top: 40px !important; padding: 0px 0px !important; font-size: 8px !important;'+
        '   }'+
        '   .ud_rastreio .ud_passos span{'+
        '       width: 6px; height: 6px; '+
        '   }'+
        '   .ud_rastreio .ud_passos svg{'+
        '       width: 24px !important; height: 24px !important;'+
        '   }'+
        '   .ud_rastreio section ul{'+
        '       padding: 0px 0px 0px 35px;'+
        '   }'+
        '   .ud_rastreio section li span{'+
        '       font-size: 10px;'+
        '   }'+
        '   .ud_rastreio section li div{'+
        '       top: calc(22% + 10px); height: 120%'+
        '   }'+
        '   .ud_rastreio .ud_passos hr{'+
        '       left: 25px; width: calc(100% - 55px); top: calc('+(icones == '5' ? '40%' : (importacao == '1' ? '20%' : '18.7%'))+' + 0px);'+
        '   }'+
		'	.ud_rastreio .ud_passos hr.ud_barra2, .ud_rastreio .ud_passos .ud_progresso2{'+
        '   	top: calc(68% + '+ (importacao == '1' ? '5px' : '1px') +') !important;'+
        '	}'+
		'	.ud_rastreio form aside{'+
        '    	max-width: unset !important;'+
        '	}'+
		'	@media (max-width: 789px){'+
		'		.ud_item img, #ud_loading{'+
		'			width: auto !important;'+
		'		}'+		
		'		#ud_loading{'+
		'			margin-bottom:27px !important;'+
		'		}'+		
		'	}'+		
        '}';    

    Id('rastreio_unico').innerHTML = html;

    var style = document.createElement("style"); style.textContent = classes; document.head.appendChild(style);

    const 
    e1 = Cls('ud_form'),
    e2 = Cls('ud_detalhes'),
    e3 = Cls('ud_progresso')
    e4 = Tag('div', Cls('ud_passos')),
    e5 = Cls('ud_barra'),
    e6 = Cls('ud_rastreio');
    e7 = Cls('ud_progresso2')

    let params  = {code:'',email:'',order:''};

    let dados = {};

    const popular = () => {

        const codigo = Id('ud_codrastreio').value;
        
        Tag('h1',e2)[0].innerText = !!dados.codigo1 ? dados.codigo1 : (!!dados.codigo2 ? dados.codigo2 : codigo);

        if(!dadospedido)
        {
            Tag('td',e2)[0].innerHTML = dados.endereco + '<br>' + dados.bairro + ' - ' + dados.cidade + ' CEP '+ dados.cep;
            Tag('td',e2)[1].innerHTML = '<strong>'+ dados.pedido + '</strong>';
            Tag('td',e2)[2].innerText = dados.total;
    
            Tag('table',e2)[0].style.display = dados.endereco == '' && dados.cep == '' ? 'none' : 'table';
    
            let _a = '';
    
            Cls('ud_item').innerHTML = '';
    
            for (const _b of dados.produtos) {
                _a += (_a != '' ? '<br clear="all"><hr>' : '') + (_b.imagem == '' + '' ? '' : '<img src="'+ _b.imagem +'" onerror="this.style.display=\'none\'" alt="'+ _b.nome +'">') + 
                '<article><span>Item</span><strong>'+ _b.quantidade +'x</strong> '+ _b.nome?.substring(0,200) + '</article>';
            }

            if(dados.produtos.length == 0){
                Cls('ud_item').style.display = 'none';
            }else{
                Cls('ud_item').style.display = 'display';
                Cls('ud_item').innerHTML = _a;
            } 
        }        

        if(dados.produtos.length == 0){
            Cls('ud_passos').style.marginTop = '20px'
        }else{
            Cls('ud_passos').style.marginTop = '40px'
        } 

        Tag('ul',Cls('ud_eventos'))[0].innerHTML = '';

        for (const _b of dados.eventos) {
            const _c = document.createElement('li');
            const _d = '<div></div><em></em><span>'+ _b.datahora +'</span>'+ _b.situacao + (!!_b.local?'<br>'+_b.local:'');
            _c.innerHTML = _d;
            Tag('ul',Cls('ud_eventos'))[0].appendChild(_c);
        }

        Tag('ul',Cls('ud_eventos'))[0].style.display = dados.eventos[0].situacao == '' ? 'none' : 'block';

        e1.style.opacity = 0;

        setTimeout(() => {
            e1.style.display = 'none';
            e2.style.display = 'flex';
            setTimeout(() => (e2.style.opacity = 1), 100);
        },300);

        let _e = icones == '5' ? 3 : 8;
		
		if(dados.eventos.length > 0)
		{
			const situacao = dados.eventos[0].situacao

			if(situacao.indexOf('Pedido pendente') >= 0)
			{
				_e = 1
			}
			else if(situacao.indexOf('Confirmado') >= 0)
			{
				_e = 2
			}
			else if(situacao.indexOf('Objetoxxx postado') >= 0)
			{
				_e = icones == '5' ? 3 : 5
			}
			else if(situacao.indexOf('Pedido coletado') >= 0)
			{
				_e = 3
			}
			else if(situacao.indexOf('Pedido separado') >= 0)
			{
				_e = icones == '5' ? 2 : 4
			}
			else if(situacao.indexOf('Pedido em personalização') >= 0)
			{
				_e = 2
			}
			else if(situacao.indexOf('em trânsito') >= 0)
			{
				_e = icones == '5' ? 3 : 8
			}
			else if(importacao == '1' && (situacao.indexOf('Objeto recebido') >= 0 || situacao.indexOf('Fiscalização aduaneira') >= 0))
			{
				_e = icones == '5' ? 3 : 7
			}
            else if(importacao == '0' && situacao.indexOf('Entrada no centro de') >= 0)
			{
				_e = icones == '5' ? 3 : 6
			}
            else if(importacao == '0' && situacao.indexOf('Saída no centro de') >= 0)
			{
				_e = icones == '5' ? 3 : 7
			}
			else if(situacao.indexOf('Objeto saiu para entrega') >= 0|| situacao.indexOf('está enviando a encomenda. Se você tiver algum problem') >= 0)
			{
				_e = icones == '5' ? 4 : 9
			}
			else if(situacao.indexOf('Entrega Efetuada') >= 0 || situacao.indexOf('pacote foi assinado') >= 0 || situacao.indexOf('assinatura de encomenda') >= 0 || situacao.indexOf('O pacote chegou ao destino final.') >= 0   || situacao.indexOf('Pacote entregue') >= 0  || situacao.indexOf('ENTREGA REALIZADA') >= 0 || situacao.indexOf('Pedido entregue') >= 0 || situacao.indexOf('ENTREGUE') >= 0 || situacao.indexOf('Entregue') >= 0 || situacao.indexOf('Eba! Seu pacote') >= 0 || situacao.indexOf('Objeto entregue ao destinatário') >= 0)
			{
				_e = icones == '5' ? 5 : 10
			}
		}

        progress(_e);
    }

    const progress = _a => {

        if(![1,2,3,4,5,6,7,8,9,10].includes(_a)) return;

        let a = 0, b = null;                    

        e3.style.width = '0px';
        if(icones == '10') e7.style.width = '0px';

        _a  = (_a || 1) - 1;

        const e = () => {
            a == _a && clearInterval(b);
            e4[a].classList.add('ativo');
            a = a + 1;
        }

        setTimeout(() => 
        {
            e3.style.width = ((e5.clientWidth / 100) * ((_a > 4 ? 4 : _a) * 25)) + 'px'
            
            if(_a > 4 && icones == '10') var e7i = setTimeout(()=>(e7.style.width = ((e5.clientWidth / 100) * ((_a-5) * 25)) + 'px', clearTimeout(e7i)),700);

            e3.style.opacity = 1;
            if(icones == '10') e7.style.opacity = 1;

            b = setInterval(e,100);
            e()
        }, 850);
    }

    const validate = a => {
        const _a = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return _a.test(String(a).toLowerCase());
    }

    const search = a => {
        
        const _a = a.target.id == 'ud_btnlocal1' ? 1 : 2;
        const _b = Id('ud_email');
        const _c = Id('ud_pednumero');
        const _d = Id('ud_codrastreio');
        const _f = Id('ud_msg');
        
        _f.style.opacity = 0;

        Cls('ud_aviso').style.display = 'none';
		_f.style.left = '-1000px';

        if(_a == 1 && (_c.value == '' || _b.value == '')){   
            _f.style.opacity = 1;			
            _c.value == '' && (_f.style.left = (_c.offsetLeft + 40) + 'px', _f.style.top = (_c.offsetTop - 48) + 'px', _c.focus());            
            _b.value == '' && (_f.style.left = (_b.offsetLeft + 40) + 'px', _f.style.top = (_b.offsetTop - 48) + 'px', _b.focus());
            return false;
        }else if(_a == 2 && (_d.value.length < 3)){
            _f.style.opacity = 1;			
            _d.value.length < 3 && (_f.style.left = (_d.offsetLeft + 40) + 'px', _f.style.top = (_d.offsetTop - 48) + 'px', _d.focus());            
            return false;
        };

        params = {code:_d.value,email:_b?_b.value:'',order:_c?_c.value:''};

        carregar();
    }

    const back = _a => {
        for (const i of Tag('button',e1)) i.disabled = false;
        if(Id('ud_loading')) Id('ud_loading').style.display = 'none';        
        if(Tag('span', e1) && Tag('span', e1)[0]) Tag('span', e1)[0].innerText = 'ou';
        e2.style.opacity = 0;
        !_a && (Cls('ud_aviso').style.display = 'none');
        setTimeout(() => {
            e2.style.display = 'none';
            e1.style.display = 'flex';
            e1.style.opacity = 1;
            e3.style.width   = '0px';
            e3.style.opacity = 0;
            for (let i=0; i<(icones=='5'?4:9); i++) e4[i].classList.remove('ativo');
        },300);
    }

    const carregar = () => {

        const a = new XMLHttpRequest();

        a.onreadystatechange = ()=> {
            
            const _b = _c => {
                Cls('ud_aviso').style.display = 'flex';
                Cls('ud_aviso').innerText = _c;
                setTimeout(() => (Cls('ud_aviso').style.opacity = 1),100);            
            }

            if (a.readyState === 4) {
                if(a.status == 200){
                    dados = JSON.parse(a.responseText.replace(/,]/g,']'));
                    popular();
                }else if(a.status == 404){
                    _b('Pedido não encontrado, verifique se os dados de busca estão corretos');
                    back(true);
                }else{
                    //_b('Tivemos problemas ao retornar sua busca, tente novamente em alguns instantes');
					_b('Pedido não encontrado, verifique se os dados de busca estão corretos');//Estamos com uma instabilidade, tente novamente dentro de 2 horas//Pedido não encontrado, verifique se os dados de busca estão corretos
                    back(true);
                }
            }
        };        
        a.open('get','https://notificacoes.unicodrop.com.br/rastreio.asp?ud_trackingcode='+ params.code +'&ud_email=' + params.email + '&order=' + params.order.replace('#','') +'&ud_user='+ Unico.conta);
        a.send();

        for (const i of Tag('button',e1)) i.disabled = true;

        if(Tag('span', e1) && Tag('span', e1)[0]) Tag('span', e1)[0].innerHTML = '<img id="ud_loading" src="https://notificacoes.unicodrop.com.br/assets/ud_loading.gif">';
    }

    const qstring = _a => {
        const a = [];
        const b = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');    
        for (let i=0; i < b.length; i++){ const c = b[i].split('='); (c[0] == _a || c[0] == _a+'[]') && a.push(decodeURIComponent(c[1]))};
        return (a.length > 0 ? (a.length == 1 ? a[0] : a) : null);
    }    

    !filtro && Id('ud_btnlocal1').addEventListener('click', search);
    Id('ud_btnlocal2').addEventListener('click', search);
    Id('ud_backbtn').addEventListener('click', back);    

    const b = qstring('codigo')

    !!b && (Id('ud_codrastreio').value = b, Id('ud_btnlocal2').click());
}();