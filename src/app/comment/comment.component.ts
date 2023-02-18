import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';
import { CommentService } from './comment.service';
import { Comments } from './comments';

@Component({
  selector: 'invapp-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{
  constructor(private commentSevice: CommentService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data) => {
    //   this.comments = data['comments']
    // })
  }
  // comments : Comments[] = []
  // comments$ = this.commentSevice.getComments()
  comments$ = this.activatedRoute.data.pipe(
    pluck('comments')
  )


}
