package com.example.demo;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.model.BlockModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
    private List<String> dataList;

    @GetMapping("/greeting")
    public Greeting greeting() {
        List<BlockModel> blockModels = new ArrayList<>();

        BlockModel blockModel1;
        BlockModel blockModel2;
        BlockModel blockModel3;

        blockModel1 = new BlockModel("./images/app/app1.jpg", "Paralax", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat.");
        blockModel2 = new BlockModel("./images/app/app2.jpg", "Scroll", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat.");
        blockModel3 = new BlockModel("./images/app/app3.jpg", "Pre-loader", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat.");

        blockModels.add(blockModel1);
        blockModels.add(blockModel2);
        blockModels.add(blockModel3);

        return new Greeting(blockModels.size(), blockModels);

//
//        return new Greeting(3, blockList);
    }

    @PostMapping(value = "/api/search", produces = "application/json")
    public ResponseEntity<String> getIndex(@RequestBody int id) {
        try {
            dataList = MyDataFile.getData();
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println(id);

        return ResponseEntity.ok(dataList.get(id));
    }
}
