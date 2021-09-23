package com.appyflows.pickadate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class EventController {

    @GetMapping("/create-event")
    public String getCreateEvent(Model model){
        return "create-event";
    }

    @PostMapping("/create-event")
    public String postCreateEvent(Model model){
        return "share-event";
    }

    @GetMapping("/manage-event")
    public String manageEvent(Model model){
        return "manage-event";
    }

    @GetMapping("/indicate-availability")
    public String indicateAvailability(Model model){
        return "indicate-availability";
    }

    @GetMapping("/share-event")
    public String shareEvent(Model model){
        return "share-event";
    }


}
