<?php

namespace App\Api\V1\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Album;

class ArtistController extends Controller
{
    protected $url = 'https://mantle.madesimplegroup.com/artists/';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $client = new \GuzzleHttp\Client(); 
        return $client->request('GET', $this->url, [
            'headers' => [
                'Authorization' => 'Basic ZGV2ZWxvcGVyOlpHVjJaV3h2Y0dWeQ==',
                'Htaccess' => 'developer:ZGV2ZWxvcGVy'
            ]
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       $client = new \GuzzleHttp\Client(); 
        return $client->request('GET', $this->url . $id, [
            'headers' => [
                'Authorization' => 'Basic ZGV2ZWxvcGVyOlpHVjJaV3h2Y0dWeQ==',
                'Htaccess' => 'developer:ZGV2ZWxvcGVy'
            ]
        ]);
    }
}
