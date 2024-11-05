<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    // Display all products
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Products/Index', ['products' => $products]);
    }

    // Store a new product
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'stock_quantity' => 'required|integer|min:0',
        ]);

        Product::create($validated);
        return redirect()->route('products.index');
    }

    // Display a single product
    public function show(Product $product)
    {
        return Inertia::render('Products/Show', ['product' => $product]);
    }

    // Update an existing product
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'stock_quantity' => 'required|integer|min:0',
        ]);

        $product->update($validated);
        return redirect()->route('products.index');
    }

    // Delete a product
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index');
    }
}