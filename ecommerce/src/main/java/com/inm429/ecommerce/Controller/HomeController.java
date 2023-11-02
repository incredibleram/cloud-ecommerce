package com.inm429.ecommerce.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.inm429.ecommerce.Repository.UserRepository;

@Controller
public class HomeController {
	@Autowired
	UserRepository userRepository;

	@GetMapping("/")
	public String homePage() {
		return "index";
	}
}
