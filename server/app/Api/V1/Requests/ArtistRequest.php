<?php

namespace App\Api\V1\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class ArtistRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string',
            'twitter' => 'required|string',
           
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
            'twitter.required' => 'Twitter is required!',
        ];
    }
}
