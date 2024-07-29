<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->get('per_page', 2); // Default to 5 articles per page
        $articles = Article::paginate($perPage);
        return response()->json($articles);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        return Article::create($request->all());
    }

    public function show(Article $article)
    {
        return $article;
    }

    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $article->update($request->all());

        return $article;
    }

    public function destroy(Article $article)
    {
        $article->delete();

        return response()->noContent();
    }
}
