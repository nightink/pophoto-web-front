/**
 * 用户个人信息
 */

define(function(require, exports, module) {
  var _ = require('underscore');
  var $ = require('jquery');
  var handlebars = require('handlebars');
  var backbone = require('backbone');
  var observer = require('observer');
  var UserModel = require('../model/user-model');

  var UserInfoView = backbone.View.extend({
    el: 'body',

    template: handlebars.compile(require('../tpl/user-info.tpl')),

    initialize: function(option) {
      observer.on('verify:user-msg', this.tipMsg, this);

      this.userModel = new UserModel(option.model || {});
    },

    events: {
      'blur #username': 'valueSet',
      'blur #password': 'valueSet',
      'blur #confirm-password': 'valueSet',
      'blur #discipline': 'valueSet',
      'change :radio': 'genderSet',
      'click #update': 'updateUser'
    },

    tipMsg: function(data) {
      if(data.flag) {
        this.$('#' + data.tagName + '-help').html(data.tipStr).attr('class', 'self-ok');
      } else {
        this.$('#' + data.tagName + '-help').html(data.tipStr).attr('class', 'self-error');
      }
    },

    valueSet: function(e) {
      var $dom = $(e.target);
      var str = $.trim($dom.val());
      var name = $dom.attr('name');

      this[name + 'Set'](str);
    },

    passwordSet: function(str) {
      this.userModel.set({ password: str }, {validate: true});
    },
    cpasswordSet: function(str) {
      this.userModel.set({ cpassword: str }, {validate: true});
    },
    usernameSet: function(str) {
      this.userModel.set({ username: str }, {validate: true});
    },

    disciplineSet: function(str) {
      this.userModel.set({ discipline: str });
    },

    // 设置性别
    genderSet: function(e) {
      var gender = this.$('input[name=gender]:checked').val();
      this.userModel.set({gender: gender});
    },

    updateUser: function(e) {

      var model = this.userModel;
      model.save(null, {
        url: '/user-update',
        success: function(model, str) {
          alert(str);
        }
      });
    },

    render: function() {
      var data = this.userModel.toJSON();
      var contents = this.template(data);
      this.$el.html(contents);
      // 渲染站点类型
      this.$('input[name=gender][value="' + data.gender +'"]').attr('checked', true);
    }
  });

  module.exports = UserInfoView;
});
