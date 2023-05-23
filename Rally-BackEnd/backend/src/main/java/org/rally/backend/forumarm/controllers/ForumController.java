package org.rally.backend.forumarm.controllers;

import org.rally.backend.forumarm.models.*;
import org.rally.backend.forumarm.models.dto.ForumPostDTO;
import org.rally.backend.forumarm.models.dto.ReplyDTO;
import org.rally.backend.forumarm.repository.*;
import org.rally.backend.userprofilearm.model.response.AuthenticationSuccess;
import org.rally.backend.userprofilearm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
public class ForumController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    ForumPostRepository forumPostRepository;
    @Autowired
    RepliesRepository repliesRepository;
    @GetMapping("/Posts")
    public ResponseEntity<?>getForumPosts(){
        return new ResponseEntity<>(forumPostRepository.findAll(), HttpStatus.OK);
    }
    @PostMapping("/Posts")
    public ResponseEntity<?>createForumPost(@RequestBody ForumPostDTO forumPostDTO){
        ForumPosts forumPost = new ForumPosts(forumPostDTO.getTitle(), forumPostDTO.getDescription(), forumPostDTO.getCategory());
        forumPost.setUserEntity(userRepository.findByUserName(forumPostDTO.getUsername()));
        forumPostRepository.save(forumPost);
        AuthenticationSuccess authenticationSuccess = new AuthenticationSuccess("Success");
        return new ResponseEntity<>(authenticationSuccess, HttpStatus.OK);
    }
    @PostMapping("viewPost")
    public ResponseEntity<?>getForumPost(@RequestBody int id){
        Optional <ForumPosts> result = forumPostRepository.findById(id);
        ForumPosts post = result.get();
        return new ResponseEntity<>(post, HttpStatus.OK);
    }
    @PostMapping("/Replies")
    public ResponseEntity<?>addReplyToPost(@RequestBody ReplyDTO replyDTO) {
        Replies reply = new Replies(replyDTO.getDescription());
        reply.setUserEntity(userRepository.findByUserName(replyDTO.getUsername()));
        Optional <ForumPosts> result = forumPostRepository.findById(replyDTO.getId());
        ForumPosts post = result.get();
        reply.setForumPosts(post);
        repliesRepository.save(reply);
        post.addReply(reply);
        AuthenticationSuccess authenticationSuccess = new AuthenticationSuccess("Success");
        return new ResponseEntity<>(authenticationSuccess, HttpStatus.OK);
    }
    @GetMapping("/Replies")
    public ResponseEntity<?> getAllReplies(){
        return new ResponseEntity<>(repliesRepository.findAll(), HttpStatus.OK);
    }
    @PostMapping("/DeleteReply")
    public ResponseEntity<?> deleteReply(@RequestBody int id) {
        repliesRepository.deleteById(id);
        AuthenticationSuccess authenticationSuccess = new AuthenticationSuccess("Success");
        return new ResponseEntity<>(authenticationSuccess, HttpStatus.OK);
    }
    @PostMapping("/UpdateReply")
    public ResponseEntity<?> updateReply(@RequestBody ReplyDTO replyDTO){
        Optional <Replies> result = repliesRepository.findById(replyDTO.getId());
        Replies reply = result.get();
        reply.setDescription(replyDTO.getDescription());
        AuthenticationSuccess authenticationSuccess = new AuthenticationSuccess("Success");
        return new ResponseEntity<>(authenticationSuccess, HttpStatus.OK);
    }

}
