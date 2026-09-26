export type CueType = "idle"|"opening"|"participant"|"award"|"scripture"|"class"|"transition"|"closing"|"video"|"prayer"|"music"|"final";
export type Cue = {id:string; name:string; type:CueType; participant?:string; title?:string; subtitle?:string; description?:string; quote?:string; reference?:string; award?:string; status?:string; duration?:number; autoClear?:boolean; photoId?:string; videoId?:string; audioId?:string};

export const initialCues:Cue[] = [
 {id:"songs",name:"Ejercicio de cantos",type:"music",title:"EJERCICIO DE CANTOS",subtitle:"Preparemos el corazón para adorar"},
 {id:"opening",name:"Inicio",type:"opening",title:"GALA DE TALENTOS Y FE",subtitle:"DECIMOTERCER SÁBADO",duration:11,autoClear:true},
 {id:"meily-welcome",name:"Bienvenida — Meily",type:"participant",participant:"MEILY",title:"MEILY",subtitle:"BIENVENIDA",award:"ESPÍRITU DE SERVICIO",description:"Por su servicio, participación y disposición para ayudar en este programa especial."},
 {id:"hymn",name:"Himno de apertura",type:"music",title:"HIMNO DE APERTURA",subtitle:"Cantemos juntos"},
 {id:"prayer",name:"Oración de apertura",type:"prayer",title:"ORACIÓN DE APERTURA",subtitle:"Unidos en fe"},
 {id:"cloey",name:"Cloey — Flauta",type:"participant",participant:"CLOEY",title:"CLOEY",subtitle:"FLAUTA",award:"ARMONÍA DE FE",description:"Por su dedicación y por compartir su talento."},
 {id:"award-cloey",name:"Premio Armonía de Fe",type:"award",participant:"CLOEY",title:"ARMONÍA DE FE",description:"Por su dedicación y por compartir su talento."},
 {id:"danielito",name:"Danielito — Versículo",type:"scripture",participant:"DANIELITO",title:"DANIELITO",subtitle:"VERSÍCULO",quote:"“Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.”",reference:"1 PEDRO 5:7",award:"PALABRA QUE DA PAZ"},
 {id:"award-danielito",name:"Premio Palabra que da Paz",type:"award",participant:"DANIELITO",title:"PALABRA QUE DA PAZ",description:"Por compartir una palabra de confianza y paz."},
 {id:"jennifer",name:"Jennifer — Canto especial",type:"participant",participant:"JENNIFER",title:"JENNIFER",subtitle:"CANTO ESPECIAL",award:"VOZ DE ESPERANZA",description:"Por poner su voz al servicio de un mensaje de fe."},
 {id:"award-jennifer",name:"Premio Voz de Esperanza",type:"award",participant:"JENNIFER",title:"VOZ DE ESPERANZA",description:"Por poner su voz al servicio de un mensaje de fe."},
 {id:"jonathan",name:"Jonathan — Animación",type:"video",participant:"JONATHAN",title:"JONATHAN",subtitle:"ANIMACIÓN",award:"CREATIVIDAD CON PROPÓSITO",description:"Por su esfuerzo, creatividad y por desarrollar una habilidad para comunicar buenas ideas."},
 {id:"award-jonathan",name:"Premio Creatividad con Propósito",type:"award",participant:"JONATHAN",title:"CREATIVIDAD CON PROPÓSITO",description:"Por su esfuerzo, creatividad y por desarrollar una habilidad que puede utilizarse para comunicar buenas ideas."},
 {id:"sela",name:"Sela Jireh — Canto especial",type:"participant",participant:"SELA JIREH",title:"SELA JIREH",subtitle:"CANTO ESPECIAL",award:"ALABANZA QUE INSPIRA",description:"Por compartir su talento y su alabanza."},
 {id:"award-sela",name:"Premio Alabanza que Inspira",type:"award",participant:"SELA JIREH",title:"ALABANZA QUE INSPIRA",description:"Por compartir su talento y su alabanza."},
 {id:"alfredo",name:"Alfredo — Libros de la Biblia",type:"participant",participant:"ALFREDO",title:"ALFREDO",subtitle:"LIBROS DE LA BIBLIA",award:"MEMORIA BÍBLICA",description:"Por el esfuerzo y la disciplina de aprender los libros de la Biblia."},
 {id:"award-alfredo",name:"Premio Memoria Bíblica",type:"award",participant:"ALFREDO",title:"MEMORIA BÍBLICA",description:"Por el esfuerzo y la disciplina de aprender los libros de la Biblia."},
 {id:"fernando",name:"Fernando — Actividades de jóvenes",type:"participant",participant:"FERNANDO",title:"FERNANDO",subtitle:"ACTIVIDADES DE JÓVENES",award:"CRONISTA DEL TRIMESTRE",description:"Por representar a los jóvenes y compartir parte de lo vivido y aprendido durante el trimestre."},
 {id:"award-fernando",name:"Premio Cronista del Trimestre",type:"award",participant:"FERNANDO",title:"CRONISTA DEL TRIMESTRE",description:"Por representar a los jóvenes y compartir parte de lo vivido y aprendido durante el trimestre."},
 {id:"noelito",name:"Noelito — Versículo",type:"scripture",participant:"NOELITO",title:"NOELITO",subtitle:"RECORDANDO EL VERSÍCULO",quote:"“Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.”",reference:"1 PEDRO 5:7",award:"MEMORIA DE LA PROMESA"},
 {id:"award-noelito",name:"Premio Memoria de la Promesa",type:"award",participant:"NOELITO",title:"MEMORIA DE LA PROMESA",description:"Por guardar y compartir una promesa de esperanza."},
 {id:"classes",name:"Transición a las clases",type:"transition",title:"ES MOMENTO DE ESTUDIAR JUNTOS",subtitle:"Pasemos a nuestras respectivas clases."},
 {id:"adult-class",name:"Clase de adultos — Joaquín",type:"class",participant:"JOAQUÍN",title:"PRIMERA Y SEGUNDA A LOS CORINTIOS",subtitle:"La esencia de la vida y el testimonio de los cristianos",description:"DIRECTOR · JOAQUÍN  —  9:52–10:32"},
 {id:"return",name:"Cierre general",type:"closing",title:"CIERRE GENERAL",subtitle:"Volvemos a reunirnos"},
 {id:"meily-recognition",name:"Reconocimiento a Meily",type:"participant",participant:"MEILY",title:"MEILY",subtitle:"CLAUSURA",award:"ESPÍRITU DE SERVICIO"},
 {id:"award-meily",name:"Premio Espíritu de Servicio",type:"award",participant:"MEILY",title:"ESPÍRITU DE SERVICIO",description:"Por su servicio, participación y disposición para ayudar en este programa especial."},
 {id:"meily-closing",name:"Clausura — Meily",type:"closing",participant:"MEILY",title:"MEILY",subtitle:"CLAUSURA"},
 {id:"final-prayer",name:"Oración final",type:"prayer",title:"ORACIÓN FINAL",subtitle:"Gracias por este tiempo compartido"},
 {id:"end",name:"Fin del programa",type:"final",title:"GRACIAS POR ACOMPAÑARNOS",subtitle:"GALA DE TALENTOS Y FE",quote:"“Que Dios los bendiga y que tengan un feliz sábado.”"}
];
