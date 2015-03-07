var proto = (document.location.protocol=='https:')?'https:':'http:';
var host = proto+'//widget.copiny.com';
document.write(unescape("%3Cscript src='" + host + "/static/js/newwidget.js' type='text/javascript'%3E%3C/script%3E"));

var copinyWidgetOptions = {
    position: 'right',
    type: 'question',
    color: 	  '#ff8400',
    border:   '#ffffff',
    round:    '1',
    title:	  "\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f",
    cache:   "6d0f9190da58525417fc87b295c35603\/6d0f9190da58525417fc87b295c35603\/ejOwVXUxULU0ApFOrmDSTdXFUNXCACYCZBuCSSdtsJCFNoYqUzBpAiadkEwyQ5J1gWgG63IDAA--",
    community:10858
};
initCopinyWidget(copinyWidgetOptions);
CopinyNewWidget.showTab();