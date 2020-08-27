<?php

namespace App\Api\V1\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Album;
use GuzzleHttp\Psr7\Request as HttpRequest;
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
        $request = new HttpRequest('GET', $this->url, [
            'Authorization' => 'Basic ZGV2ZWxvcGVyOlpHVjJaV3h2Y0dWeQ==',
            'Htaccess' => 'developer:ZGV2ZWxvcGVy'
        ]);
        return $client->send($request);
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
        $request = new HttpRequest('GET', $this->url . $id, [
            'Authorization' => 'Basic ZGV2ZWxvcGVyOlpHVjJaV3h2Y0dWeQ==',
            'Htaccess' => 'developer:ZGV2ZWxvcGVy'
        ]);
        return $client->send($request);
    }
}
