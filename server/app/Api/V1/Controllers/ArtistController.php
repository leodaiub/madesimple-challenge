<?php

namespace App\Api\V1\Controllers;
use App\Http\Controllers\Controller;
use App\Api\V1\Requests\ArtistRequest;
use Illuminate\Http\Request;
use App\Models\Artist;
use GuzzleHttp\Psr7\Request as HttpRequest;
class ArtistController extends Controller
{
        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $artists = Artist::all();
        return $artists;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArtistRequest $request)
    {
        return $artist = Artist::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return  $artist = Artist::where('id', $id)->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ArtistRequest $request, $id)
    {
        $artist = Artist::where('id', $id);
        $Artist->update($request->except('_token', '_method'));
        return $Artist->first();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return  $artist = Artist::where('id', $id)->delete();
    }
}
