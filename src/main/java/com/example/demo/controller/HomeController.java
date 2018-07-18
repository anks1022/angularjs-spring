package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/** View renderer
 */
@Controller
public class HomeController {
	@RequestMapping("/users")
	public String home() {
		return "index";
	}
}
