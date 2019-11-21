<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/lista','Usercontroller@lista');
Route::post('/guardar', 'Usercontroller@guardar');
Route::put('/editar', 'Usercontroller@editar');
Route::delete('/borrar', 'Usercontroller@borrar');

