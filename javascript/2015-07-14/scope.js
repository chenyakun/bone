/**
 * Created by yakuncyk on 15/7/14.
 */

"use strict";

function F() {

    // 1.����һ���¶���

    // 2.�����캯���������򸳸� this ����

    // 3.ִ�й��캯���еĴ���(Ϊ��������������)

    // 4.�����¶���

    this.init();
}

F.prototype.init = function() {
    console.log("init");
};


new F();
