// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: "=QQYQPOOOOQO'#D{'#D{QYQPOOO!dQPO'#EuO!xQPO'#DOOOQO'#EV'#EVO#QQPO'#D^OOQO'#EW'#EWO#nQPO'#D_OOQO'#EY'#EYO#uQPO'#D`OOQO'#E]'#E]O#}QPO'#DcOOQO'#E^'#E^O$UQPO'#DdOOQO'#E_'#E_O$]QPO'#DeOOQO'#Db'#DbOOQO'#E`'#E`O$dQPO'#DfOOQO'#Ea'#EaO$qQPO'#DgOOQO'#Ec'#EcO$xQPO'#DhOOQO'#Ee'#EeO%bQPO'#DiOOQO'#El'#ElO%iQPO'#DtOOQO'#Em'#EmO%tQPO'#DuOOQO'#Eo'#EoO&PQPO'#DvOOQO'#Er'#ErO&XQPO'#DwOOQO'#Es'#EsO&aQPO'#DxOOQO'#Et'#EtO&hQPO'#DyO&oQPO'#DzOOQO'#C}'#C}Q!_QPO'#D|Q&zQPOOOOQO-E7y-E7yOOQO'#DR'#DRO(RQPO,59lOOQO'#EO'#EOO(oQPO,59jOOQO'#DT'#DTO(ZQPO,59jO(vQPO,59jO#`QPO,59jOOQO-E8T-E8TO*PQPO'#DUO*yOSO'#E}O+ROQO'#FROOQO'#DW'#DWO+ZQPO'#EXOOQO'#DU'#DUOOQO-E8U-E8UOOQO'#EX'#EXO,OQPO,59yOOQO-E8W-E8WO,YQPO,59zO-gQPO,59}OOQO-E8Z-E8ZOOQO,59},59}O-{QPO,5:OOOQO-E8[-E8[OOQO,5:O,5:OO.aQPO,5:POOQO-E8]-E8]OOQO,5:P,5:PO.uQPO,5:QOOQO-E8^-E8^OOQO,5:Q,5:QO/ZQPO,5:ROOQO-E8_-E8_O/lQPO,5:RO/qQPO,5:SOOQO-E8a-E8aO0SQPO,5:SO0XQPO'#DUO0wQPO'#DlOOQO-E8c-E8cO0`QPO'#DlOOQO'#Dj'#DjO1XQPO,5:TOOQO-E8j-E8jOOQO-E8k-E8kO1gQPO,5:aOOQO-E8m-E8mO1lQPO,5:bOOQO-E8p-E8pO1qQPO,5:cO1|QPO,5:dOOQO-E8q-E8qOOQO-E8r-E8rO2WQPO,5:eOOQO'#Eu'#EuOOQO-E8s-E8sO2fQPO,5:hOOQO-E7z-E7zOOQO'#D}'#D}O3sQPO1G/WO3vQPO1G/WOOQO-E7|-E7|O3{QPO'#EPO4mQPO1G/UO5RQPO1G/aOOQO'#ET'#ETO5^QPO1G/cOOOO'#EQ'#EQO5oOSO,5;iOOQO,5;i,5;iOOOO'#ER'#ERO5wOQO,5;mOOQO,5;m,5;mOOQO'#DX'#DXOOQO'#DY'#DYO#`QPO,5;qO#`QPO,5;qOOQO-E8V-E8VOOQO'#EZ'#EZO6PQPO1G/fOOQO'#Eb'#EbO6bQPO1G/mOOQO'#Ed'#EdO6jQPO1G/nO6rQPO,5:VO6zQPO,5:WO7RQPO,5:WOOQO'#Dn'#DnO#]QPO,5:XOOQO'#Dp'#DpOOQO'#Dq'#DqO7RQPO,5:ZOOQO'#Eg'#EgO7YQPO,5:^OOQO'#Eh'#EhO7bQPO,5:_OOQO'#Ej'#EjO7jQPO'#EiOOQO'#Ek'#EkO7qQPO'#EiO7xQPO1G/oOOQO'#En'#EnO8WQPO1G/{O8cQPO1G/|O6PQPO1G/}O8nQPO1G0POOQO-E7{-E7{OOQO'#DS'#DSOOQO7+$r7+$rOOQO-E7}-E7}O8|QPO7+${O9RQPO'#EUOOQO-E8R-E8RO9sQPO7+$}OOOO-E8O-E8OOOQO1G1T1G1TOOOO-E8P-E8POOQO1G1X1G1XOOQO1G1]1G1]O:XQPO1G1]O;rQPO'#DaOOQO-E8X-E8XOOQO7+%Q7+%QOOQO-E8`-E8`OOQO7+%X7+%XOOQO-E8b-E8bOOQO7+%Y7+%YOOQO'#Ef'#EfO=]QPO1G/qO=nQPO1G/rOOQO1G/r1G/rO#]QPO1G/rO>YQPO1G/sOOQO1G/s1G/sO>tQPO1G/uOOQO1G/u1G/uO#]QPO1G/uOOQO-E8e-E8eOOQO1G/x1G/xOOQO-E8f-E8fOOQO1G/y1G/yOOQO-E8h-E8hOOQO,5;T,5;TOOQO-E8i-E8iOOQO-E8g-E8gOOQO-E8l-E8lOOQO'#Ep'#EpO?`QPO7+%hOOQO7+%h7+%hOOQO7+%i7+%iO?kQPO'#ESO?vQPO<<HgOOQO-E8S-E8SO@OQPO,59{O#`QPO'#E[OOQO-E8d-E8dOA]QPO7+%^OOQO7+%^7+%^OAwQPO7+%aOOQO7+%a7+%aOOQO-E8n-E8nOBcQPO<<ISOOQO,5:n,5:nOOQO-E8Q-E8QOOQOAN>RAN>ROOQO-E8Y-E8YOBhQPO,5:vOOQO'#Eq'#EqODRQPOAN>nOOQO-E8o-E8oOOQOG24YG24Y",
  stateData: "Da~OoOS#lOS~ORhOTjOXtOYVOZZO[]O]_O^bO_dOafOcTOflOhnOkXOlpOmrOsRO#mPO~OW}O#n{O#p!POs#iX#j#iX#m#iX~OW}O#p!PO~OcTO#j!QX#m!QX~OkXOs!UOy!ZO#r!VO#v!WO~OYVO~P#]OkXOs!`O~OZZO~P#]O[]O~P#]O]_O~P#]O^bO#j!YX#m!YX~P#]O_dO~P#]OafO~P#]OkXOs!sOy!ZO#r!VO#v!WO~ORhO~P%POTjO#j!hX#m!hX~OflOs!{Oy!{O~OhnOs!}O~OlpOs#PO~OmrO~P#]OXtO~P%POs#UO#j!nX#m!nX~ORhOTjOXtOYVOZZO[]O]_O^bO_dOafOcTOflOhnOkXOlpOmrOsRO~OQ#YOs#[O~OP#aOs!UOy!ZO#n{O#r!VO#v!WO~OW}O~P(ZOW}Os!UOy!ZO#r!VO#v!WO~O#n{O#zxX#{xX#|xX#}xXWxXdxXexX#pxX$OxX$PxX$QxX~OkxXsxXyxX#jxX#mxX#rxX#vxXbxX`xX!OxXUxXVxX~P)XO#s#cO#t#eO~O#w#fO#x#hO~O#z#iO#{#iO#|#jO#}#jOk!{Xs!{Xy!{X#j!{X#m!{X#r!{X#v!{X~O#j!Ra#m!Ra~P#]On#nO#j!Sa#m!Sak!Sas!Say!Sa#r!Sa#v!Sab!Sa`!SaW!Sad!Sae!Sa#p!Sa$O!Sa$P!Sa$Q!SaU!SaV!Sa~O#z#iO#{#iO#|#jO#}#jO#j!Va#m!Va~O#z#iO#{#iO#|#jO#}#jO#j!Wa#m!Wa~O#z#iO#{#iO#|#jO#}#jO#j!Xa#m!Xa~O#z#iO#{#iO#|#jO#}#jO#j!Ya#m!Ya~Ob#pO#z#iO#{#iO#|#jO#}#jO~Ob#pO~O`#rO#z#iO#{#iO#|#jO#}#jO~O`#rO~OW}O~P)XOW}Od#|Oe$OO#p!PO$O#wO$P#yO$Q#zO~O#z#iO#{#iO#|#jO#}#jO~P0`OU$QOV$SO#j!]a#m!]a~Og$VO~Od#|O~On#nO#j!ka#m!ka~O#j!la#m!la~P#]OU$QOV$SO#j!ma#m!ma~O#mPOR!paT!paX!paY!paZ!pa[!pa]!pa^!pa_!paa!pac!paf!pah!pak!pal!pam!pas!pa#j!pa~OQ#YO#o$]O~O#z#iO#{#iO#|#jO#}#jOs!sXy!sX#j!sX#m!sX#r!sX#v!sX~Os!UOy!ZO#r!VO#v!WO#jri#mri~Oy$`O#r!VO#v!WO~OP#aOs!UOy!ZO#r!VO#v!WO~O#s#cO#t$eO~O#w#fO#x$gO~On#nOs!UOy!ZO#r!VO#v!WO~Ob#pOs$nO~O`#rOs$pO~OS$qOW}O~OW}O~P#]O#p!PO~P#]Od#|Os$|O~Oe$OOs%OO~OU$QO~P%POV$SO~P%POU$QOV$SO#j!]i#m!]i~Og$VO#j!ii#m!ii~Od#|Oj%UOs%WO~OU$QOV$SO#j!mi#m!mi~O!O%YO~O#z#iO#{#iO#|#jO#}#jOs!xXy!xX#j!xX#m!xX#r!xX#v!xX~Os!UOy!ZO#r!VO#v!WO#j!Pq#m!Pq~O#z#iO#{#iO#|#jO#}#jOk#yis#yiy#yi#j#yi#m#yi#r#yi#v#yib#yi`#yiW#yid#yie#yi#p#yi$O#yi$P#yi$Q#yi!O#yiU#yiV#yi~O!O%^O#z#iO#{#iO#|#jO#}#jO#j!TX#m!TXk!TXs!TXy!TX#r!TX#v!TXb!TX`!TXW!TXd!TXe!TX#p!TX$O!TX$P!TX$Q!TXU!TXV!TX~OS$qOU!_iV!_i#j!_i#m!_i~O#z#iO#{#iO#|#jO#}#jOU!`iV!`i#j!`i#m!`i~O#z#iO#{#iO#|#jO#}#jOU!aiV!ai#j!ai#m!ai~O#z#iO#{#iO#|#jO#}#jOU!ciV!ci#j!ci#m!ci~Oj%UOs%eOy%eO~Oy%fO#r!VO#v!WO~O!O%YO#o$]O~O!O%^O#j!Ta#m!Tak!Tas!Tay!Ta#r!Ta#v!Tab!Ta`!TaW!Tad!Tae!Ta#p!Ta$O!Ta$P!Ta$Q!TaU!TaV!Ta~O#z#iO#{#iO#|#jO#}#jOU!`qV!`q#j!`q#m!`q~O#z#iO#{#iO#|#jO#}#jOU!cqV!cq#j!cq#m!cq~Oi%kO~O#z#iO#{#iO#|#jO#}#jO!O#Oa#j#Oa#m#Oak#Oas#Oay#Oa#r#Oa#v#Oab#Oa`#OaW#Oad#Oae#Oa#p#Oa$O#Oa$P#Oa$Q#OaU#OaV#Oa~Oi%kOs%nOy%nO~Oys~",
  goto: "3W#zPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP#{$QP$V%O%X%`%pP'Y(S(h$QP$Q$Q$Q(|*R$Q*X*X*X$Q$Q$Q$Q*^*h*h*h*n*h*r*r*h*h$Q$Q$Q$Q$Q$Q$Q*v+Q+X+_+r+{,R,X,_,f,l,t,|-W-t.O.U.^.f.n.v/O/V/_/f/n/t0P0W0b0k0t0|1U1[1d1j1p1x2Q2YPPPPPPP2bPPP2bPPP$[VxOQyVwOQyUSOQy!c!ZW[^`cegisu!O!Q!R!S!^#Q#_#b#k#l#o#u#v#x#{$R$T$Y$c$u$z%^U|R!U!sT#`!O!QS$^#Z#[R%h%ZQ!QRQ!SSS#v!t!vQ$u#vR$z#{W!YWs!^#QQ!a[Q!d^Q!g`Q!jcQ!meQ!pgW!tiu$R$TY#^!O!Q!R!S#_S$a#b$cQ$h#kQ$i#lS$j#o$YS$s#u#vQ$v#xQ$x#{Q%`$uQ%b$zR%j%^!b!ZW[^`cegisu!O!Q!R!S!^#Q#_#b#k#l#o#u#v#x#{$R$T$Y$c$u$z%^Q$`#`R%f%Yu#k!Y!a!d!g!j!m!p!t#^$a$i$j$s$v$x%`%b%ju#l!Y!a!d!g!j!m!p!t#^$a$i$j$s$v$x%`%b%jUwOQyW!]Ws!^#QQ!c[Q!f^Q!i`Q!lcQ!oeQ!rgW!viu$R$TS$t#u#vQ$w#xQ$y#{Q%a$uR%c$zQ$l#oR%X$YVaOQyQ!xiQ#TuT%Q$R$TX!wiu$R$TT#x!t!vT#{!t!vQQOSzQ#WR#WxSyOQR#XyQ#Z|R$[#ZQ!ORQ!RSW#]!O!R#t#uQ#t!sT#u!t!vW#_!O!Q!R!SR$_#_Q#d!VR$d#dQ#g!WR$f#gQ%Z$`R%g%ZS#b!O!QR$b#bQ$c#bR%[$cUUOQyR!TUUWOQyR![WQ!^WQ#QsT#m!^#Q!OYOQW[^`cegisuy!^#Q#u#v#x#{$R$T$u$zR!_YQ#o!`Q$Y#PT$k#o$YQ%]$jR%i%]U[OQyR!b[U^OQyR!e^U`OQyR!h`UcOQyR!kcUeOQyR!neS#q!m!oR$m#qUgOQyR!qgS#s!p!rR$o#sUiOQyR!uiQ$r#tR%_$rS#}!t!vQ$X!}T${#}$XS$P!t!vR$}$PQ$U!xQ$Z#TT%S$U$ZW$R!x#T$U$ZR%P$RW$T!x#T$U$ZR%R$TUkOQyR!ykUmOQyR!zmQ$W!{R%T$WUoOQyR!|oQ%V$XR%d%VQ%l%eR%m%lUqOQyR#OqUsOQyR#RsUuOQyR#SuUvOQyR#Vv!g!XW[^`cegisu!O!Q!R!S!^#Q#_#`#b#k#l#o#u#v#x#{$R$T$Y$c$u$z%Y%^",
  nodeNames: "⚠ ask random if pressed else and or is while print forward turn color sleep add from remove toList clear in not_in repeat times for to range call define resturns with Comment Program Command Assign Text ListAccess Op Op Op Expression Number String Op Op AssignList Comma Ask Clear Print Call Arguments Turtle Forward Turn Color Sleep Add Remove If Condition PressedCheck EqualityCheck NotEqualCheck Op ComparisonCheck Op Op InListCheck NotInListCheck Else Repeat For Define Return While ErrorInvalid",
  maxTerm: 140,
  nodeProps: [
    ["group", 52,"turtle"]
  ],
  skippedNodes: [0,31],
  repeatNodeCount: 41,
  tokenData: "2U~R!cOY%^YZ&eZp%^pq&jqr&ors&zst'Ptw%^wx'hxz%^z{'m{|'r|}'w}!O'|!O!P%^!P!Q(R!Q!R(W!R!S(W!S!T(W!T!U(W!U!V(W!V!W(W!W!X(W!X!Y(W!Y!Z(W!Z![(W![!^%^!^!_1k!_!`1p!`!a1u!a!}%^!}#O1z#O#P%^#P#Q2P#QBn%^BnBo'wBoDf%^DfDg(WDgDh(WDhDi(WDiDj(WDjDk(WDkDl(WDlDm(WDmDn(WDnDo(WDoDp(WDpGl%^GlGm(WGmGn(WGnGo(WGoGp(WGpGq(WGqGr(WGrGs(WGsGt(WGtGu(WGuGv(WGv&FV%^&FV&FW'w&FW;'S%^;'S;=`&_<%l?Hb%^?Hb?Hc'w?HcO%^~%c^s~OY%^Zp%^tw%^xz%^!O!P%^!Q!^%^!a!}%^#O#P%^#QBn%^Bo&FV%^&FW;'S%^;'S;=`&_<%l?Hb%^?HcO%^~&bP;=`<%l%^~&jO#m~~&oO#l~~&rP!_!`&u~&zO$O~~'PO#r~~'USo~OY'PZ;'S'P;'S;=`'b<%lO'P~'eP;=`<%l'P~'mO#v~~'rO#z~~'wO#|~~'|O!O~~(RO#}~~(WO#{~~(_!Oy~s~OY%^Zp%^tw%^xz%^!O!P+_!Q!R(W!R!S(W!S!T(W!T!U(W!U!V(W!V!W(W!W!X(W!X!Y(W!Y!Z(W!Z![(W![!^%^!a!}%^#O#P%^#QBn%^BoDf%^DfDg(WDgDh(WDhDi(WDiDj(WDjDk(WDkDl(WDlDm(WDmDn(WDnDo(WDoDp(WDpGl%^GlGm(WGmGn(WGnGo(WGoGp(WGpGq(WGqGr(WGrGs(WGsGt(WGtGu(WGuGv(WGv&FV%^&FW;'S%^;'S;=`&_<%l?Hb%^?HcO%^~+d!Os~OY%^Zp%^tw%^xz%^!O!P%^!Q!R.d!R!S.d!S!T.d!T!U.d!U!V.d!V!W.d!W!X.d!X!Y.d!Y!Z.d!Z![.d![!^%^!a!}%^#O#P%^#QBn%^BoDf%^DfDg.dDgDh.dDhDi.dDiDj.dDjDk.dDkDl.dDlDm.dDmDn.dDnDo.dDoDp.dDpGl%^GlGm.dGmGn.dGnGo.dGoGp.dGpGq.dGqGr.dGrGs.dGsGt.dGtGu.dGuGv.dGv&FV%^&FW;'S%^;'S;=`&_<%l?Hb%^?HcO%^~.k!Oy~s~OY%^Zp%^tw%^xz%^!O!P%^!Q!R.d!R!S.d!S!T.d!T!U.d!U!V.d!V!W.d!W!X.d!X!Y.d!Y!Z.d!Z![.d![!^%^!a!}%^#O#P%^#QBn%^BoDf%^DfDg.dDgDh.dDhDi.dDiDj.dDjDk.dDkDl.dDlDm.dDmDn.dDnDo.dDoDp.dDpGl%^GlGm.dGmGn.dGnGo.dGoGp.dGpGq.dGqGr.dGrGs.dGsGt.dGtGu.dGuGv.dGv&FV%^&FW;'S%^;'S;=`&_<%l?Hb%^?HcO%^~1pO$Q~~1uO#p~~1zO$P~~2PO#n~~2UO#o~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O#x~~", 14, 131), new LocalTokenGroup("_~RQYZXrsX~^O#t~~", 14, 127)],
  topRules: {"Program":[0,32]},
  dynamicPrecedences: {"76":-10},
  specialized: [{term: 35, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 35, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 1624
})