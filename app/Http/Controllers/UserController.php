<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){
        $user= User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        return response()->json([
            'logged' => true,
            'name' => $user->name,
            'email' => $user->email,
            'id' => $user->id
        ]);
    } 
    
    public function login(Request $request){
        if(auth()->attempt(['email' => $request->email, 'password' => $request->password])){
            return response()->json([
                'logged' => true,
                'name' => auth()->user()->name,
                'email' => auth()->user()->email,
                'id' => auth()->user()->id
            ]);
        }else {
            return response()->json([
                'error'=> 'Email ou mot de passe incorrecte'
            ]);
        }
    }
}
