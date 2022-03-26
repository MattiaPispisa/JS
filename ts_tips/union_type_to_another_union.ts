type Entity = { type: "user" } | { type: "post" } | { type: "comment" }

/* go to this --> */
/* programmatically */
type TODOEntityWIthId = { type: "user"; userId: string } | { type: "post"; postId: string } | { type: "comment"; commentId: string }

type EntityWithId = {
  [EntityType in Entity["type"]]: { type: EntityType } & Record<`${EntityType}Id`, string>
}[Entity["type"]]

const example: EntityWithId = { type: "comment", commentId: "12" }
const example2: EntityWithId = { type: "post", postId: "132" }
