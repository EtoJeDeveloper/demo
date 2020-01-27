package com.example.demo;


import com.example.demo.model.BlockModel;

import java.util.ArrayList;
import java.util.List;

public class Greeting {
    private final int counter;
    private final List<BlockModel> blockModels;


    public Greeting(int counter, List<BlockModel> blockModels) {
        this.counter = counter;
        this.blockModels = blockModels;
    }

    public int getCounter() {
        return counter;
    }

    public List<BlockModel> getBlockModels() {
        return blockModels;
    }
}