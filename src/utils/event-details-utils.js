export const EVENT_DESCRIPTION = { // From https://developer.github.com/v3/activity/events/types/
  CommitCommentEvent: "Commented on a commit",
  CreateEvent: "Created a repository, branch, or tag",
  DeleteEvent: "Deleted a branch or tag",
  DeploymentEvent: "Deployed",
  DeploymentStatusEvent: "Changed a deployment status",
  DownloadEvent: "Created a new download",
  FollowEvent: "Followed another user",
  ForkEvent: "Forked a repository",
  ForkApplyEvent: "Applied a patch in the Fork Queue",
  GistEvent: "Created or updated a Gist",
  GollumEvent: "Created or updated a Wiki page",
  IssueCommentEvent: "Created, edited, or deleted an issue comment",
  IssuesEvent: "Assigned, unassigned, labeled, unlabeled, opened, edited, milestoned, demilestoned, closed, or reopened an issue",
  LabelEvent: "Created, edited, or deleted a repository's label",
  MemberEvent: "User was added or removed as a collaborator to a repository, or had their permissions changed",
  MembershipEvent: "User was added or removed from a team",
  MilestoneEvent: "Milestone was created, closed, opened, edited, or deleted",
  OrganizationEvent: "User was added, removed, or invited to an Organization",
  PageBuildEvent: "Attempted build of a GitHub Pages site, whether successful or not",
  PublicEvent: "Private repository was open sourced. Without a doubt: the best GitHub event",
  PullRequestEvent: "Pull request was assigned, unassigned, labeled, unlabeled, opened, edited, closed, reopened, or synchronized",
  PullRequestReviewEvent: "Pull request review was submitted into a non-pending state",
  PullRequestReviewCommentEvent: "Comment on a Pull Request's unified diff was created, edited, or deleted (in the Files Changed tab)",
  PushEvent: "Repository branch was pushed to. In addition to branch pushes, webhook push events are also triggered when repository tags are pushed.",
  ReleaseEvent: "Release was published",
  RepositoryEvent: "Repository was created, deleted, made public, or made private",
  StatusEvent: "Status of a Git commit changed",
  TeamEvent: "Organization's team was created or deleted",
  TeamAddEvent: "Repository was added to a team",
  WatchEvent: "Starred a repository"
};

export const URL_PATHS = {
  CommitCommentEvent: 'comment.html_url',
  ForkEvent: 'forkee.html_url',
  IssueCommentEvent: 'issue.html_url',
  IssuesEvent: 'issue.html_url',
  PullRequestEvent: 'pull_request.html_url',
  PullRequestReviewCommentEvent: 'comment._links.html.href'
};

export const TEXT_PATHS = {
  CommitCommentEvent: 'comment.body',
  CreateEvent: 'description',
  DownloadEvent: 'download.description',
  ForkEvent: 'forkee.description',
  GistEvent: 'gist.description',
  IssueCommentEvent: 'comment.body',
  IssuesEvent: 'issue.body',
  MemberEvent: 'member.bio',
  PullRequestEvent: 'pull_request.body',
  PullRequestReviewCommentEvent: 'comment.body'
};


export const walk = (x, path) => {
  if (x && path) {
    const paths = path.split('.');
    for (let i in paths) {
      if (paths.hasOwnProperty(i)) {
        x = x[paths[i]];
      }
      if (!x) return;
    }
    return x;
  }
};

export const getEventName = (type) => type.replace(/([A-Z])/g, ' $1').toLowerCase();
