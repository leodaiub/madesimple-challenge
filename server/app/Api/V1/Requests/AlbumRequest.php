<?php

namespace App\Api\V1\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class AlbumRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string',
            'year' => 'required|integer',
            'artist_id' => 'required|integer'
        ];
    }

    public function authorize()
    {
        return true;
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Email is required!',
            'year.required' => 'Year is required!',
            'artist_id.required' => 'Artist is required!'
        ];
    }
}
