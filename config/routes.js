/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  '/user/login': 'UserController.login',
  '/user/register': 'UserController.register',
  '/user/homepage':'UserController.homepage',
  'user/logout':'UserController.logout',
  '/user/delete/:code': 'UserController.delete',
  '/user/administrator/:username': 'UserController.delete1',
  '/user/administrator': 'UserController.admin',

  '/member/inputscore':'UserController.inputscore',
  '/member/calc':'UserController.calc',
  '/member/searchU':'UserController.search',
  '/member/view':'MemberController.view',
  
  '/member/info':'MemberController.info',
  '/member/furtherinfo':'MemberController.furtherinfo',
  '/member/jupas':'MemberController.jupas',
  '/member/gov':'MemberController.gov',
  '/member/notes':'MemberController.notes',
  '/member/contact':'MemberController.contact',
  
  '/member/security':'MemberController.security',
  '/member/brief':'MemberController.brief',
  '/member/hku':'MemberController.hku',
  '/member/hkbu':'MemberController.hkbu',
  '/member/cityu':'MemberController.cityu',
  '/member/lingu':'MemberController.lingu',
  '/member/cuhk':'MemberController.cuhk',
  '/member/eduhk':'MemberController.eduhk',
  '/member/polyu':'MemberController.polyu',
  '/member/hkust':'MemberController.hkust',
  '/member/ouhk':'MemberController.ouhk',
  '/member/prehistory':'MemberController.prehistory',
  
  '/member/career':'MemberController.career',
  '/member/arts':'MemberController.arts',
  '/member/business':'MemberController.business',
  '/member/socialsciences':'MemberController.socialsciences',
  '/member/engineering':'MemberController.engineering',
  '/member/science':'MemberController.science',
  '/member/architecture':'MemberController.architecture',
  '/member/comm':'MemberController.comm'

};
