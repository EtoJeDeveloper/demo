package com.example.demo;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class MyDataFile {
    static public List<String> getData() throws IOException {
        String data;
        List<String> dataList = new ArrayList<>();
        String path = "C:\\Rocketman\\demo\\src\\main\\resources\\dataFile";

        BufferedReader reader = new BufferedReader(new FileReader(path));

        while ((data = reader.readLine()) != null) {
                    dataList.add(data);
        }

        return dataList;
    }
}
