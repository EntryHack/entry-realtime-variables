namespace Dto {
  export namespace Comment {
    export const SELECT_COMMENTS_INPUT = `
      $pageParam: PageParam
      $target: String
      $groupId: ID
  `;

    export const SELECT_COMMENTS_MIDDLE = `
      pageParam: $pageParam
      target: $target
      groupId: $groupId
  `;

    export const CREATE_COMMENT_INPUT = `
      $content: String
      $image: String
      $sticker: String
      $target: String
      $targetSubject: String
      $targetType: String
      $groupId: ID
  `;

    export const CREATE_COMMENT_MIDDLE = `
      content: $content
      image: $image
      sticker: $sticker
      target: $target
      targetSubject: $targetSubject
      targetType: $targetType
      groupId: $groupId
  `;

    export const CREATE_AGREE_INPUT = `
      $content: String
      $target: String
  `;

    export const CREATE_AGREE_MIDDLE = `
      content: $content
      target: $target
  `;
  }

  export namespace Common {
    export const UPDATED_RESULT = `
      n
      nModified
      ok
  `;

    export const BLOCK = `
      category
      blocks
  `;

    export const FILE = `
      name
      path
      size
      id
  `;

    export const DIMENSION = `
      width
      height
  `;

    export const PDF_FILE = `
      name
      path
      url
  `;

    export const LABEL = `
      ko
      en
      ja
      vn
  `;

    export const PICTURE = `
      id
      name
      label {
          ${LABEL}
      }
      filename
      imageType
      dimension {
          ${DIMENSION}
      }
      trimmed {
          filename
          width
          height
      }
  `;

    export const FOREIGN_SELECT_USER = `
      id
      nickname
      username
      profileImage {
          ${PICTURE}
      }
      status {
          following
          follower
      }
      description
      role
  `;

    export const CODE = `
      id
      speed
      objects
      variables
      messages
      functions
      scenes
      interface
      expansionBlocks
  `;

    export const PROGRESS = `
      id
      student{
          id
      }
      studyStatus {
          category
          status
          value
      }
  `;

    export const INJECT_OPTION = `
      objectEditable
      pictureeditable
      soundeditable
      sceneEditable
      messageEnable
      variableEnable
      listEnable
      functionEnable
      hintDisable
      programmingMode
      isMovePossible
      isRandomQuestion
      isCheckAnwser
      freezingVariable
      lockBasicBlocks
  `;

    export const CATEGORY = `
      id
      name
      value
      label {
          ${LABEL}
      }
      categoryType
      depth
      categoryOrder
      children {
          id
          name
          value
          label {
              ${LABEL}
          }
          categoryType
          depth
          categoryOrder
      }
  `;

    export const SOUND = `
      id
      name
      label {
          ${LABEL}
      }
      filename
      duration
  `;

    export const SPRITE = `
      id
      name
      label {
          ${LABEL}
      }
      category {
          main
          sub
      }
      pictures {
          ${PICTURE}
      }
      sounds {
          ${SOUND}
      }
  `;

    export const TABLE = `
      chart
      fields
      name
      data
  `;

    export const TABLE_INFO = `
      id
      name
      lang
      url
      rows
      fields
      provider
      summary
      description
      exampleurl
      linkText
      isOpen
      projectTable
  `;

    export const REALTIME_VARIABLE = `
      variableType
      key
      value
      array {
          key
          data
      }
      minValue
      maxValue
      visible
      x
      y
      width
      height
      object
  `;
    export const PROJECT = `
      id
      name
      user {
          ${FOREIGN_SELECT_USER}
      }
      visit
      speed
      objects
      variables
      messages
      functions
      tables
      scenes
      thumb
      isopen
      blamed
      isPracticalCourse
      category
      categoryCode
      created
      updated
      shortenUrl
      parent {
          id
          name
          user {
              id
              username
              nickname
          }
      }
      likeCnt
      favorite
      special
      isForLecture
      isForStudy
      isForSubmit
      hashId
      complexity
      staffPicked
      ranked
      submitId {
          id
      }
      description
      description2
      description3
      hasRealTimeVariable
      realTimeVariable {
          ${REALTIME_VARIABLE}
      }
      commentGroup {
          group
          count
      }
      likeCntGroup {
          group
          count
      }
      visitGroup {
          group
          count
      }
      recentGroup {
          group
          count
      }
      learning
      expansionBlocks
      aiUtilizeBlocks
  `;

    export const SYLLABUS_LIST_ITEM = `
      id
      title
      description
      categoryCode
      user {
          id
          username
          nickname
          profileImage {
              id
              filename
              imageType
          }
      }
      isOpen
      type
      target
      thumb
      likeCnt
      comment
      visit
      studyCnt
      difficulty
      requiredTime
  `;

    export const PROJECT_LIST_ITEM = `
      id
      name
      user {
          id
          username
          nickname
          profileImage {
              id
              filename
              imageType
          }
      }
      thumb
      isopen
      isPracticalCourse
      category
      categoryCode
      created
      updated
      special
      isForLecture
      isForStudy
      isForSubmit
      hashId
      complexity
      staffPicked
      ranked
      visit
      likeCnt
      comment
  `;

    export const GROUP_PROJECT_LIST_ITEM = `
      id
      name
      user {
          id
          username
          nickname
          profileImage {
              filename
              imageType
          }
      }
      thumb
      isopen
      isPracticalCourse
      category
      categoryCode
      created
      updated
      special
      isForLecture
      isForStudy
      isForSubmit
      hashId
      complexity
      staffPicked
      group
      visit
      comment
      likeCnt
      recentGroup {
          group
          count
      }
  `;

    export const STUDY = `
      id
      type
      name
      stageName
      stageNumber
      
      basicProject {
          ${PROJECT}
      }
      doneProject {
          ${PROJECT}
      }
      blockSkins
      endRule
      nextStep
      overrideBlock
      limitBlockCount
      theme
      hints
      tvcastUrl
      availableBlocks {
          category
          blocks
      }
      injectOption {
          ${INJECT_OPTION}
      }
      pdfFile {
          ${PDF_FILE}
      }
      entities
      gridSize {
          ${DIMENSION}
      }
      tileSize {
          ${DIMENSION}
      }
      preloadBlock
     
      character
      refCount
      contents
      checkScript
      media
      textContent
      
  `;
    export const LECTURE = `
      id
      title
      description
      goals
      thumb
      category
      categoryCode
      lectureType
      isOpen
      requiredTime
      difficulty
      textBookInfo{
          isTextBook
          sequence
          title
      }
      file {
          name
          path
          url
      }
      user {
          ${FOREIGN_SELECT_USER}
      }
      curriculum { 
          id
          title
          description
          categoryCode
          isOpen
          lectures {
              id
              title
              thumb
              user {
                  ${FOREIGN_SELECT_USER}
              }
              progress{
                  ${PROGRESS}
              }
          }
          visit
          favorite
          shortenUrl
          updated
      }
      visit
      likeCnt
      visit
      favorite
      studyCnt
      isForHomework
      homework
      due
      studies {
          ${STUDY}
      }
      progress {
          ${PROGRESS}
      }
      repStudy{
          ${STUDY}
      }
  
      studies {
          ${STUDY}
      }
      parent {
          id
          title
          user {
              id
              nickname
          }
          description
          goals
          difficulty
          requiredTime
      }
      created
      updated
      blamed
  `;

    export const LECTURE_LIST = `
      id
      title
      user {
          ${FOREIGN_SELECT_USER}
      }
      visit
      likeCnt
      favorite
      studyCnt
      isForHomework
      progress {
          ${PROGRESS}
      }
      repStudy{
          ${STUDY}
      }
  `;
    export const CURRICULUM = `
      id
      title
      description
      categoryCode
      isOpen
      user {
          ${FOREIGN_SELECT_USER}
      }
      lectures {
          ${LECTURE_LIST}
      }
      visit
      favorite
      shortenUrl
      created
      updated
      blamed
  `;
    export const COMMENT = `
      id
      user {
          ${FOREIGN_SELECT_USER}
      }
      content
      created
      removed
      blamed
      commentsLength
      likesLength
      isLike
      hide
      image {
          ${PICTURE}
      }
      sticker {
          ${PICTURE}
      }
  `;
    export const DISCUSS = `
      id
      title
      content
      seContent
      created
      commentsLength
      likesLength
      visit
      category
      prefix
      groupNotice
      user {
          ${FOREIGN_SELECT_USER}
      }
      images {
          filename
          imageUrl
      }
      progress
      thumbnail
      reply
      bestComment {
          ${COMMENT}
      }
      blamed
  `;

    export const SYLLABUS = `
      id
      title
      description
      thumb
      likeCnt
      visit
      commentCnt
      category
      categoryCode
      requiredTime
      difficulty
      target
      user {
          ${FOREIGN_SELECT_USER}
      }
      type
  `;

    export const RESPONSE = `
      status
      result
  `;

    export const TOPIC = `
      id
      params
      template
      thumbUrl
      category
      target
      isRead
      created
      updated
      link {
          category
          target
          hash
      }
      topicinfo {
          category
          targetId
      }
  `;

    export const FOLLOWERS = `
      id
      user {
          id
          username
          nickname
          profileImage {
              ${PICTURE}
          }
          status {
              following
              follower
          }
          isFollow
          projects {
              id
              thumb
              name
          }
      }
  `;
    export const FOLLOWINGS = `
      id
      follow {
          id
          username
          nickname
          profileImage {
              ${PICTURE}
          }
          status {
              following
              follower
          }
          isFollow
          projects {
              id
              thumb
              name
          }
      }
  `;
    export const FOLLOW = `
      id
      ${FOLLOWERS}
      ${FOLLOWINGS}
  `;

    export const INSTALL_FILE = `
      id
      version
      apps {
          win32_x86 {
              ${FILE}
          }
          win32_x64 {
              ${FILE}
          }
          darwin {
              ${FILE}
          }
      }
      category
      hashes
      isPublish
      releaseDate
      created
      updated
  `;
    export const FAVORITE = `
      target
      targetSubject
      targetType
  `;
    export const LIKE = `
      target
      targetSubject
      targetType
  `;
    export const BANNER = `
      id
      name
      url
      backgroundColorCode
      textColorCode
      image {
          ${PICTURE}
      }
      title {
          ${LABEL}
      }
      subTitle {
          ${LABEL}
      }
  `;

    export const STUDY_BANNER = `
      id
      name
      url
      textColorCode
      title {
          ${LABEL}
      }
      description {
          ${LABEL}
      }
      image {
          ${PICTURE}
      }
      tabletImage {
          ${PICTURE}
      }
  `;

    export const STUDY_CONTENTS = `
      id
      name
      url
      textColorCode
      title {
          ${LABEL}
      }
      description {
          ${LABEL}
      }
      material {
          ${LABEL}
      }
      image {
          ${PICTURE}
      }
      tabletImage {
          ${PICTURE}
      }
  `;

    export const EntryStory = `
    id
      content
      created
      commentsLength
      likesLength
      user {
          ${FOREIGN_SELECT_USER}
      }
      image {
          ${PICTURE}
      }
      sticker {
          ${PICTURE}
      }
      isLike
  `;

    export const FAQ = `
      id
      title
      content
  `;

    export const STICKER = `
      id
      title
      image {
          ${PICTURE}
      }
      stickers {
          ${PICTURE}
      }
  `;

    export const GROUP = `
      id
      teacher {
          id
          username
          nickname
      }
      name
      school
      grade
      image
      description
      shortUrl
      students {
          id
          studentNo
          studentName
          studentCode
          tempPwd
          sex
          status
          user {
              id
              username
              nickname
          }
          studentUser {
              id
              username
              nickname
          }
      }
      discuss {
          list {
              id
              title
              groupNotice
              created
              updated
          }
          total
      }
      homeworks {
          title
          description
          due
          lecture
          submissions {
              student 
              name
              project 
              lecture 
              submitDate
          }
          created
          updated
          target
      }
      syllabus {
          list {
              id
              title
              created
              updated
          }
          total
      }
      lectures {
          id
          title
          description
      }
      isTeacher
      invite {
          code
          expired
      }
      created
      updated
  `;

    export const NEW_STUDENT = `
      id
      studentNo
      studentName
      studentCode
      tempPwd
      sex
      status
      user {
          id
          username
          nickname
      }
      studentUser {
          id
          username
          nickname
      }
  `;

    export const LIKE_USER = `
      id
      target
      targetSubject
      targetType
      user {
          ${FOREIGN_SELECT_USER}
      }
  `;

    export const CHALLENGE = `
      id
      topic 
      keywords 
      bgColor
      mainKeyword {
          ko
          en
      }
      description {
          ko
          en
      }
  `;

    export const BANNED_INFO = `
      id
      bannedType
      startDate
      endDate
      reason
      description
      bannedCount
      username
      nickname
      userReflect {
          id
          endDate
          status
      }
      projectId
  `;
  }

  export namespace Curriculum {
    export const CREATE_CURRICULUM_INPUT = `
      $title: String
      $categoryCode: String
      $description: String
      $lectures: [String]
      $isOpen: Boolean
  `;

    export const CREATE_CURRICULUM_MIDDLE = `
      title: $title
      categoryCode: $categoryCode
      description: $description  
      lectures: $lectures
      isOpen: $isOpen
  `;

    export const UPDATE_CURRICULUM_INPUT = `
      $id: ID!
      $title: String
      $categoryCode: String
      $description: String
      $lectures: [String]
      $isOpen: Boolean
  `;

    export const UPDATE_CURRICULUM_MIDDLE = `
      id: $id
      title: $title
      categoryCode: $categoryCode
      description: $description
      lectures: $lectures
      isOpen: $isOpen
  `;
  }

  export namespace Discuss {
    export const QnA = `
      id
      title
      created
      commentsLength
      likesLength
      visit
      user {
          ${Common.FOREIGN_SELECT_USER}
      }
      bestComment {
          content
      }
      thumbnail
  `;

    export const Notice = `
      id
      title
      created
      commentsLength
      likesLength
      visit
      prefix
      user {
          ${Common.FOREIGN_SELECT_USER}
      }
  `;

    export const SUGGESTION = `
      id
      title
      created
      commentsLength
      comments {
          ${Common.COMMENT}
      }
      prefix
      user {
          ${Common.FOREIGN_SELECT_USER}
      }
      reply
      progress
  `;

    // used group community
    export const Community = `
      id
      title
      content
      seContent
      prefix
      owner
      visit
      likesLength
      commentsLength
      images {
          filename 
          oriFilename 
          imagePath 
          thumbPath 
          imageUrl 
          thumbUrl 
      }
      attachment {
          filename
          oriFilename
          filepath 
          filesize
      }
      user {
          id
          username
          nickname
      }
      category
      groupNotice
      preDataForClous
      created
      updated
  `;

    export const CREATE_DISCUSS_INPUT = `
      $title: String
      $content: JSON
      $text: String
      $category: String
      $prefix: String
  `;

    export const CREATE_DISCUSS_MIDDLE = `
      title: $title
      content: $content
      text: $text
      category: $category
      prefix: $prefix
  `;

    export const CREATE_ENTRYSTORY_INPUT = `
      $content: String
      $text: String
      $image: String
      $sticker: String
      $cursor: String
  `;

    export const CREATE_ENTRYSTORY_MIDDLE = `
      content: $content
      text: $text
      image: $image
      sticker: $sticker
      cursor: $cursor
  `;

    export const SELECT_DISCUSS_LIST_INPUT = `
      $pageParam: PageParam
      $query: String
      $user: String
      $category: String
      $term: String
      $prefix: String
      $progress: String
      $discussType: String
      $searchType: String
      $searchAfter: JSON
  `;

    export const SELECT_DISCUSS_LIST_MIDDLE = `
      pageParam: $pageParam
      query: $query
      user: $user
      category: $category
      term: $term
      prefix: $prefix
      progress: $progress
      discussType: $discussType
      searchType: $searchType
      searchAfter: $searchAfter
  `;
  }

  export namespace Follow {
    export const FOLLOW_INPUT = `
      $user: String
  `;

    export const FOLLOW_MIDDLE = `
      user: $user
  `;

    export const UNFOLLOW_INPUT = `
      $user: String
  `;

    export const UNFOLLOW_MIDDLE = `
      user: $user
  `;
  }

  export namespace Lecture {
    export const CREATE_LECTURE_INPUT = `
      $title: String
      $categoryCode: String
      $description: String
      $goals: [String]
      $difficulty: Int
      $requiredTime: Int
      $studies: [JSON]
      $groupId: ID
      $isOpen: Boolean
  `;

    export const CREATE_LECTURE_MIDDLE = `
      title: $title
      categoryCode: $categoryCode
      description: $description
      goals: $goals
      difficulty: $difficulty
      requiredTime: $requiredTime
      studies: $studies
      groupId: $groupId
      isOpen: $isOpen
  `;

    export const UPDATE_LECTURE_INPUT = `
      $id: ID!
      $title: String
      $categoryCode: String
      $description: String
      $goals: [String]
      $difficulty: Int
      $requiredTime: Int
      $studies: [JSON]
      $isOpen: Boolean
  `;

    export const UPDATE_LECTURE_MIDDLE = `
      id: $id
      title: $title
      categoryCode: $categoryCode
      description: $description
      goals: $goals
      difficulty: $difficulty
      requiredTime: $requiredTime
      studies: $studies
      isOpen: $isOpen
  `;
  }

  export namespace Project {
    export const SELECT_PROJECTS_INPUT = `
      $query: String
      $categoryCode: String
      $staffPicked: Boolean
      $ranked: Boolean
      $parent: String
      $pageParam: PageParam
      $term: String
      $queryTitleOnly:Boolean
      $isChallenge:Boolean
      $searchAfter: JSON
      $searchType: String
      $cacheKey: String
  `;
    export const SELECT_PROJECTS_MIDDLE = `
      query: $query
      categoryCode: $categoryCode
      staffPicked: $staffPicked
      ranked: $ranked
      parent: $parent
      pageParam: $pageParam
      term: $term
      queryTitleOnly: $queryTitleOnly
      isChallenge: $isChallenge
      searchAfter: $searchAfter
      searchType: $searchType
      cacheKey: $cacheKey
  `;

    export const SELECT_USER_PROJECTS_INPUT = `
      $user: String!
      $query: String
      $categoryCode: String
      $groupId: ID
      $pageParam: PageParam
      $isOpen: Boolean
      $except: [ID]
      $searchAfter: JSON
      $searchType: String
  `;

    export const SELECT_USER_PROJECTS_MIDDLE = `
      user: $user
      query: $query
      categoryCode: $categoryCode
      groupId: $groupId
      pageParam: $pageParam
      isOpen: $isOpen
      except: $except
      searchAfter: $searchAfter
      searchType: $searchType
  `;

    export const SELECT_FOLLOWING_PROJECTS_INPUT = `
      $pageParam: PageParam
      $query: String
      $categoryCode: String
      $searchAfter: JSON
      $searchType: String
  `;

    export const SELECT_FOLLOWING_PROJECTS_MIDDLE = `
      pageParam: $pageParam
      query: $query
      categoryCode: $categoryCode
      searchAfter: $searchAfter
      searchType: $searchType
  `;

    export const CREATE_PROJECT_INPUT = `
      $name: String
      $speed: Int
      $objects: JSON
      $variables: JSON
      $messages: JSON
      $functions: JSON
      $tables: JSON
      $scenes: JSON
      $lecture:ID
      $study:ID
      $isForLecture:Boolean
      $isForStudy:Boolean
      $isForSubmit: Boolean
      $isPracticalCourse: Boolean
      $interface: JSON
      $aiUtilizeBlocks: JSON
      $expansionBlocks: JSON
      $description: String
      $description2: String
      $description3: String
      $thumb: String
      $isopen: Boolean
      $categoryCode: String
      $parent: ID
      $learning: String
  `;

    export const CREATE_PROJECT_MIDDLE = `
      name: $name
      speed: $speed
      objects: $objects
      variables: $variables
      messages: $messages
      functions: $functions
      tables: $tables
      scenes: $scenes
      lecture: $lecture
      study: $study
      isForLecture: $isForLecture
      isForStudy: $isForStudy
      isForSubmit: $isForSubmit
      isPracticalCourse: $isPracticalCourse
      interface: $interface
      aiUtilizeBlocks: $aiUtilizeBlocks
      expansionBlocks: $expansionBlocks
      description: $description
      description2: $description2
      description3: $description3
      thumb: $thumb
      isopen: $isopen
      categoryCode: $categoryCode
      parent: $parent
      learning: $learning
  `;

    export const UPDATE_PROJECT_INPUT = `
      $id: ID!
      $name: String
      $speed: Int
      $objects: JSON
      $variables: JSON
      $messages: JSON
      $functions: JSON
      $tables: JSON
      $scenes: JSON
      $interface: JSON
      $aiUtilizeBlocks: JSON
      $expansionBlocks: JSON
      $thumb: String
      $categoryCode: String
      $description: String
      $description2: String
      $description3: String
      $isopen: Boolean
      $isPracticalCourse: Boolean
      $group: ID
      $learning: String
  `;

    export const UPDATE_PROJECT_MIDDLE = `
      id: $id
      name: $name
      speed: $speed
      objects: $objects
      variables: $variables
      messages: $messages
      functions: $functions
      tables: $tables
      scenes: $scenes
      interface: $interface
      aiUtilizeBlocks: $aiUtilizeBlocks
      expansionBlocks: $expansionBlocks
      thumb: $thumb
      categoryCode: $categoryCode
      description: $description
      description2: $description2
      description3: $description3
      isopen: $isopen
      isPracticalCourse: $isPracticalCourse
      group: $group
      learning: $learning
  `;
  }

  export namespace Syllabus {
    export const SELECT_SYLLABUS_INPUT = `
      $query: String 
      $categoryCode: String
      $pageParam: PageParam
      $ranked: Boolean
      $term: String
      $searchType: String
      $searchAfter: JSON
  `;

    export const SELECT_SYLLABUS_MIDDLE = `
      query: $query
      categoryCode: $categoryCode
      pageParam: $pageParam
      ranked: $ranked
      term: $term
      searchType: $searchType
      searchAfter: $searchAfter
  `;

    export const SELECT_USER_SYLLABUS_INPUT = `
      $user: String!
      $query: String
      $categoryCode: String
      $groupId: ID
      $studyType: String
      $isOpen: Boolean
      $type: String
      $pageParam: PageParam
      $searchType: String
      $searchAfter: JSON
  `;

    export const SELECT_USER_SYLLABUS_MIDDLE = `
      user: $user
      query: $query
      categoryCode: $categoryCode
      groupId: $groupId
      studyType: $studyType
      isOpen: $isOpen
      type: $type
      pageParam: $pageParam
      searchType: $searchType
      searchAfter: $searchAfter
  `;
  }

  export namespace Topic {
    export const CREATE_TOPIC_INPUT = `
      $target: String
      $template: String
      $params: [String]
      $thumbUrl: String
      $category: String
      $link: LinkInput
  `;

    export const CREATE_TOPIC_MIDDLE = `
      target: $target
      template: $template
      params: $params
      thumbUrl: $thumbUrl
      category: $category
      link: $link
  `;
  }
}

namespace Query {
  export namespace Banned {
    export const IPADDRESS_BANNED = `
    query {
        ipaddressBanned {
            bannedType
            ipaddress
            endDate
            reason
        }
    }
`;

    export const SELECT_BANNED_INFINITE = `
    query ($id: ID!){
        selectBannedInfinite(id: $id) {
            bannedType
            startDate
            endDate
            reason
            description
            bannedCount
            username
        }
    }
`;

    export const SELECT_BANNED_USER_INFO = `
    query ($id: ID!){
        selectBannedUserInfo(id: $id) {
            id
            bannedType
            startDate
            endDate
            reason
            description
            bannedCount
            username
            nickname
            userReflect {
                id
                endDate
                status
            }
            projectId
        }
    }
`;
  }

  export namespace Banner {
    export const SELECT_BANNERS = `
    query ($category: String, $deviceType: String) {
        banners(category: $category, deviceType: $deviceType) {
            total
            list {
                ${Dto.Common.BANNER}
            }
        }
    }
`;

    export const SELECT_STUDY_INFO = `
    query {
        studyinfo {
            banner {
                ${Dto.Common.STUDY_BANNER}
            }
            contents {
                ${Dto.Common.STUDY_CONTENTS}
            }
        }
    }
`;
  }

  export namespace Category {
    export const GET_CATEGORIES = `
    query($categoryType: String, $depth: Int) {
        categories(categoryType: $categoryType, depth: $depth) {
            category {
                ${Dto.Common.CATEGORY}
            }
            subCategory {
                ${Dto.Common.CATEGORY}
            }
        }
    }
`;
  }

  export namespace Challenge {
    export const SELECT_CURRENT_CHALLENGE = `
    query  {
        currentChallenge {
            ${Dto.Common.CHALLENGE}
        }
    }
`;
  }

  export namespace Comment {
    export const SELECT_COMMENTS = `
query (${Dto.Comment.SELECT_COMMENTS_INPUT}){
    commentList(${Dto.Comment.SELECT_COMMENTS_MIDDLE}) {
        total
        list {
            ${Dto.Common.COMMENT}
        }
    }
}
`;

    export const CREATE_COMMENT = `
mutation CREATE_COMMENT(
    ${Dto.Comment.CREATE_COMMENT_INPUT}
) {
    createComment(
        ${Dto.Comment.CREATE_COMMENT_MIDDLE}
    ) {
        warning
        comment {
            ${Dto.Common.COMMENT}
        }
    }
}
`;

    export const REMOVE_COMMENT = `
mutation REMOVE_COMMENT($id:ID){
    removeComment(id: $id){
        id
    }
}
`;

    export const CREATE_AGREE = `
mutation CREATE_AGREE(
    ${Dto.Comment.CREATE_AGREE_INPUT}
){
    createAgree(
        ${Dto.Comment.CREATE_AGREE_MIDDLE}
    ){
        ${Dto.Common.COMMENT}
    }
}
`;

    export const HIDE_COMMENT = `
mutation HIDE_COMMENT($id: ID){
    hideComment(id: $id){
        ${Dto.Common.COMMENT}
    }
}
`;

    export const SHOW_COMMENT = `
mutation SHOW_COMMENT($id: ID){
    showComment(id: $id){
        ${Dto.Common.COMMENT}
    }
}
`;

    export const REPAIR_COMMENT = `
mutation REPAIR_COMMENT($id: ID, $content: String, $image: String, $sticker: String){
    repairComment(id: $id, content: $content, image: $image, sticker: $sticker){
        ${Dto.Common.COMMENT}
    }
}
`;

    export const CHECK_AGREE = `
query CHECK_AGREE($target: String) {
    checkAgree(target: $target){
        ${Dto.Common.COMMENT}
    }
}
`;

    export const BLAMED_COMMENT = `
mutation BLAMED_COMMENT($id: ID) {
    blamedComment(id: $id){
        ${Dto.Common.COMMENT}
    }
}
`;
  }

  export namespace Common {
    export const UPDATE_VIEWCOUNT = `
    mutation UPDATE_VIEWCOUNT(
        $target: ID!, $targetSubject: String, $groupId: ID
    ){
        updateViewCount(
            target: $target, targetSubject: $targetSubject, groupId: $groupId
        ){
            ${Dto.Common.RESPONSE}
        }
    }
`;
  }

  export namespace CommonCode {
    export const SELECT_COMMONCODE = `
    query ($key: String) {
        commonCode(key: $key) {
            codes {
                code
                text
            }
            key
        }
    }
`;
  }

  export namespace Curriculum {
    export const CREATE_CURRICULUM = `
mutation CREATE_CURRICULUM(
    ${Dto.Curriculum.CREATE_CURRICULUM_INPUT}
) {
    createCurriculum(
        ${Dto.Curriculum.CREATE_CURRICULUM_MIDDLE}
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const UPDATE_CURRICULUM = `
mutation UPDATE_CURRICULUM(
    ${Dto.Curriculum.UPDATE_CURRICULUM_INPUT}
) {
    updateCurriculum(
        ${Dto.Curriculum.UPDATE_CURRICULUM_MIDDLE}
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const DELETE_CURRICULUM = `
mutation DELETE_CURRICULUM(
    $id: ID!
) {
    deleteCurriculum(
        id: $id
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SELECT_CURRICULUM = `
query SELECT_CURRICULUM($id: ID!, $groupId: ID){
    curriculum(id: $id, groupId: $groupId){
        ${Dto.Common.CURRICULUM}
    }
}
`;

    export const BLAMED_CURRICULUM = `
mutation BLAMED_CURRICULUM($id: ID!){
    blamedCurriculum(id: $id){
        ${Dto.Common.CURRICULUM}
    }
}
`;

    export const SHOW_CURRICULUM = `
mutation SHOW_CURRICULUM($id: ID!){
    showCurriculum(id: $id){
        ${Dto.Common.CURRICULUM}
    }
}
`;
  }

  export namespace DbCache {
    export const SELECT_DB_CACHE = `
    query ($key: String, $key2: String) {
        beginner: dbCache (key: $key) {
            key
            value
            count
        }
        intermediate: dbCache (key: $key2) {
            key
            value
            count
        }
    }
`;
  }

  export namespace Discuss {
    export const SELECT_DISCUSS = `
query ($id: ID!){
    discuss (id: $id){
        ${Dto.Common.DISCUSS}
    }
}
`;

    export const SELECT_GROUP_COMMUNITY = `
query ($id: ID! $groupId: ID){
    selectGroupCommunity (id: $id groupId: $groupId){
        ${Dto.Common.DISCUSS}
    }
}
`;

    export const SELECT_DISCUSS_PREV_NEXT = `
query ($discussJson: JSON){
    discussPrevNext(discussJson: $discussJson){
        prev
        next
    }
}
`;

    export const SELECT_MY_DISCUSS = `
query ($id: ID!){
    myDiscuss (id: $id){
        ${Dto.Common.DISCUSS}
    }
}
`;

    export const SELECT_DISCUSS_LIST = `
query (${Dto.Discuss.SELECT_DISCUSS_LIST_INPUT}){
    discussList(${Dto.Discuss.SELECT_DISCUSS_LIST_MIDDLE}) {
        total
        list {
            ${Dto.Common.DISCUSS}
        }
        searchAfter
    }
}
`;

    export const CREATE_DISCUSS = `
mutation CREATE_DISCUSS(
    ${Dto.Discuss.CREATE_DISCUSS_INPUT}
) {
    createDiscuss(
        ${Dto.Discuss.CREATE_DISCUSS_MIDDLE}
    ) {
        warning
        discuss{
            ${Dto.Common.DISCUSS}
        }
    }
}
`;

    export const CREATE_ENTRYSTORY = `
mutation CREATE_ENTRYSTORY(
    ${Dto.Discuss.CREATE_ENTRYSTORY_INPUT}
) {
    createEntryStory(
        ${Dto.Discuss.CREATE_ENTRYSTORY_MIDDLE}
    ) {
        warning
        discuss{
            ${Dto.Common.DISCUSS}
        }
    }
}
`;

    export const MODIFY_DISCUSS = `
mutation MODIFY_DISCUSS(
    $id: ID!
    $title: String
    $content: JSON
    $category: String
    $text: String
) {
    modifyDiscuss(
        id: $id
        title: $title
        content: $content
        category: $category
        text: $text
    ) {
        ${Dto.Common.DISCUSS}
    }
}
`;

    export const SELECT_QNA_LIST = `
query (${Dto.Discuss.SELECT_DISCUSS_LIST_INPUT}){
    discussList(${Dto.Discuss.SELECT_DISCUSS_LIST_MIDDLE}) {
        total
        list {
            ${Dto.Discuss.QnA}
        }
        searchAfter
    }
}
`;

    export const SELECT_ENTRYSTORY = `
query (${Dto.Discuss.SELECT_DISCUSS_LIST_INPUT}){
    discussList(${Dto.Discuss.SELECT_DISCUSS_LIST_MIDDLE}) {
        total
        list {
            ${Dto.Common.EntryStory}
        }
        searchAfter
    }
}
`;

    export const SELECT_NOTICE_LIST = `
query (${Dto.Discuss.SELECT_DISCUSS_LIST_INPUT}){
    discussList(${Dto.Discuss.SELECT_DISCUSS_LIST_MIDDLE}) {
        total
        list {
            ${Dto.Discuss.Notice}
        }
        searchAfter
    }
}
`;

    export const REMOVE_DISCUSS = `
mutation REMOVE_DISCUSS($id: ID) {
    removeDiscuss(id: $id){
        id
    }
}
`;

    export const BLAMED_DISCUSS = `
mutation BLAMED_DISCUSS($id: ID) {
    blamedDiscuss(id: $id){
        id
    }
}
`;

    export const SHOW_DISCUSS = `
mutation SHOW_DISCUSS($id: ID){
    showDiscuss(id: $id){
        id
    }
}
`;

    // JSON 데이터 커뮤니티 삭제 (학급)
    export const REMOVE_DISCUSS_INFO = `
mutation REMOVE_DISCUSS($discussJson: JSON) {
    removeDiscussInfo(discussJson: $discussJson){
        ${Dto.Common.RESPONSE}
    }
}
`;

    // JSON 커뮤니티 숨김 (학급)
    export const BLAMED_DISCUSS_INFO = `
mutation BLAMED_DISCUSS_INFO($discussJson: JSON) {
    blamedDiscussInfo(discussJson: $discussJson){
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const REPLY_DISCUSS = `
mutation REPLY_DISCUSS($id: ID!, $reply: String) {
    replyDiscuss(id: $id, reply: $reply){
        ${Dto.Discuss.SUGGESTION}
    }
}
`;

    export const REPAIR_ENTRYSTORY = `
mutation REPAIR_COMMENT($id: ID, $content: String, $image: String, $sticker: String){
    repairEntryStory(id: $id, content: $content, image: $image, sticker: $sticker){
        ${Dto.Common.DISCUSS}
    }
}
`;
  }

  export namespace DownloadLog {
    export const CREATE_DOWNLOAD_LOG = `
    mutation CREATE_DOWNLOAD_LOG($id: ID!, $name:String!, $category: String!, $os: String!, $version: String!){
        createDownloadLog (
            id: $id
            name: $name
            category: $category
            os: $os
            version: $version
        ){
            ${Dto.Common.RESPONSE}
        }
    }
`;
  }

  export namespace Favorite {
    export const FAVORITES = `
query FAVORITES($user: String, $target: String, $targetSubject: String, $targetType: String, $pageParam: PageParam){
    favorites(user: $user, target: $target, targetSubject: $targetSubject, targetType: $targetType, pageParam: $pageParam) {
        total
        list {
            ${Dto.Common.FAVORITE}
            project {
                ${Dto.Common.PROJECT}
            }
        }
    }
}
`;

    export const FAVORITE_COUNTS = `
query FAVORITES($user: String, $target: String, $targetSubject: String, $targetType: String, $pageParam: PageParam){
    favorites(user: $user, target: $target, targetSubject: $targetSubject, targetType: $targetType, pageParam: $pageParam) {
        total
    }
}
`;

    export const CHECK_FAV = `
query CHECK_FAV($target: String!){
    checkFav(target: $target) {
        isFavorite
    }
}
`;

    export const FAV = `
mutation FAV($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {
    fav(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {
        ${Dto.Common.FAVORITE}
    }
}
`;

    export const UNFAV = `
mutation UNFAV($target: String) {
    unfav(target: $target) {
        ${Dto.Common.FAVORITE}
    }
}
`;

    export const FAV_LIST = `
query FAV_LIST($target: String!){
    favList(target: $target) {
        total
        list {
            ${Dto.Common.LIKE_USER}
        }
    }
}
`;
  }

  export namespace Feedback {
    export const REPORT_FEEDBACK = `
mutation ($reportJson: JSON) {
    reportFeedback(reportJson: $reportJson) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const FEEDBACK_USER_LIST = `
    query($id: ID) {
        feedbackUserlist(id: $id) {
            total
            list {
                category
                url
                original
                created
                group {
                    name
                }
                lecture {
                    title
                }
            }
        }
    }
`;
  }

  export namespace Follow {
    export const FOLLOWINGS = `
query SELECT_FOLLOWINGS($user: String, $pageParam: PageParam){
    followings(user: $user, pageParam: $pageParam) {
        hasNext
        list {
            ${Dto.Common.FOLLOWINGS}
        }
    }
}
`;

    export const FOLLOWERS = `
query SELECT_FOLLOWERS($user: String, $pageParam: PageParam){
    followers(user: $user, pageParam: $pageParam) {
        hasNext
        list {
            ${Dto.Common.FOLLOWERS}
        }
    }
}
`;

    export const CHECK_FOLLOW = `
query CHECK_FOLLOW($user: String!){
    checkFollow(user: $user) {
        isFollow
    }
}
`;

    export const FOLLOW = `
mutation FOLLOW(
    ${Dto.Follow.FOLLOW_INPUT}
) {
    follow(
        ${Dto.Follow.FOLLOW_MIDDLE}
    ) {
        ${Dto.Common.FOLLOW}
    }
}
`;

    export const UNFOLLOW = `
mutation UNFOLLOW(
    ${Dto.Follow.UNFOLLOW_INPUT}
) {
    unfollow(
        ${Dto.Follow.UNFOLLOW_MIDDLE}
    ) {
        ${Dto.Common.FOLLOW}
    }
}
`;
  }

  export namespace Group {
    const GROUP_HOME = `
id
teacher {
    id
    username
    nickname
}
name
school
grade
image
description
shortUrl
students {
    id
    studentNo
    studentName
    studentCode
    tempPwd
    sex
    status
    user {
        id
        username
        nickname
    }
    studentUser {
        id
        username
        nickname
    }
}
discuss {
    id
    title
    groupNotice
    created
    updated
}
homeworks {
    total
    list {
        id
        title
        description
        due
        lecture
        submissions {
            student 
            name
            project 
            lecture 
            submitDate
        }
        created
        updated
        target
    }
}
syllabus {
    total
    list {
        id
        title
        created
        updated
        target
        type
    }
}
projects {
    list {
        id
        title
    }
    total
}
isTeacher
invite {
    code
    expired
}
created
updated
isGroupOwner
`;

    export const CREATE_GROUP_BY_USER = `
mutation( $groupJson: JSON ) {
    createGroupByUser(groupJson: $groupJson) {
        id
        name
    }
}
`;

    export const UPDATE_GROUP_BY_USER = `
mutation( $groupJson: JSON ) {
    updateGroupByUser(groupJson: $groupJson) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    // 커뮤니티 등록
    export const CREATE_COMMUNITY_BY_USER = `
mutation( $groupJson: JSON ) {
    createCommunityByUser(groupJson: $groupJson) {
        id
    }
}
`;

    // 커뮤니티 수정
    export const UPDATE_COMMUNITY_BY_USER = `
mutation( $groupJson: JSON ) {
    updateCommunityByUser(groupJson: $groupJson) {
        id
    }
}
`;

    // 커뮤니티 조회
    export const SELECT_COMMUNITY_BY_USER = `
query( $queryString: JSON ) {
    selectCommunityByUser(queryString: $queryString) {
        ${Dto.Discuss.Community}
    }
}
`;

    export const SELECT_INVATE_CODE_CHECK = `
query($queryString: JSON) {
    selectInvateCodeCheck(queryString: $queryString) {
        id
        name
    }
}
`;

    export const INVATE_CODE_JOIN = `
mutation( $groupJson: JSON ) {
    invateCodeJoin(groupJson: $groupJson) {
        id
        name
        invite {
            code
        }
    }
}
`;

    // 초대 코드 재생성
    export const INVATE_CODE_REMAKE = `
mutation( $groupJson: JSON ) {
    invateCodeRemake(groupJson: $groupJson) {
        invite {
            code
            expired
        }
    }
}
`;

    // 학생 패스워드 재생성
    export const STUDENT_PASSWD_RESET = `
mutation( $groupJson: JSON ) {
    studentPasswdReset(groupJson: $groupJson) {
        tempPwd
    }
}
`;

    // 학급 학생 등록
    export const CREATE_MY_STUDENT_LIST = `
mutation( $groupJson: JSON ) {
    createMyStudentList(groupJson: $groupJson) {
        total
        list {
            ${Dto.Common.NEW_STUDENT}
        }
    }
}
`;

    // 학급 학생수정
    export const UPDATE_MY_STUDENT_LIST = `
mutation( $groupJson: JSON ) {
    updateMyStudentList(groupJson: $groupJson) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    // 선생님 계정 학급이용 동의 처리
    export const AGREE_TO_STUDENT_TERM = `
mutation( $groupJson: JSON ) {
agreeToStudentTerm(groupJson: $groupJson) {
    id
}
}
`;

    // 학급 삭제하기 ( role : teacher )
    export const DELETE_MY_CLASS_GROUP = `
mutation( $groupJson: JSON ) {
deleteMyClassGroup(groupJson: $groupJson) {
    ${Dto.Common.RESPONSE}
}
}
`;

    // 전체 학급 삭제하기 ( role : teacher )
    export const DELETE_ALL_MY_CLASS_GROUP = `
mutation {
deleteAllMyClassGroup {
    ${Dto.Common.RESPONSE}
}
}
`;

    // 학급 나가기
    export const LEAVE_JOIN_GROUP = `
mutation( $groupJson: JSON ) {
leaveJoinGroup(groupJson: $groupJson) {
    ${Dto.Common.RESPONSE}
}
}
`;

    // 학급 신고하기
    export const REPORT_GROUP_FEEDBACK = `
mutation( $groupJson: JSON ) {
reportGroupFeedback(groupJson: $groupJson) {
    ${Dto.Common.RESPONSE}
}
}
`;

    export const SELECT_MY_GROUP_LIST = `
query($queryString: JSON, $pageParam: PageParam) {
    selectMyGroupList(queryString: $queryString, pageParam: $pageParam) {
        isTeacher
        isStudentTerm
        total
        list {
            ${Dto.Common.GROUP}
        }
    }
}
`;

    export const SELECT_JOIN_GROUP_LIST = `
query($queryString: JSON, $pageParam: PageParam) {
    selectJoinGroupList(queryString: $queryString, pageParam: $pageParam) {
        isTeacher
        isStudentTerm
        total
        list {
            ${Dto.Common.GROUP}
        }
    }
}
`;

    // 나의 학급 조회
    export const SELECT_MY_GROUP = `
query($queryString: JSON) {
    selectMyGroup(queryString: $queryString) {
        ${GROUP_HOME}
    }
}
`;

    // 나의학급 작품 리스트
    export const SELECT_GROUP_PROJECT_LIST = `
query(
    $term: String, 
    $query: String, 
    $groupId: String,
    $pageParam: PageParam, 
    $searchType: String, 
    $searchAfter: JSON,
    $categoryCode: String, 
) {
    selectGroupProjectList(
        term: $term
        query: $query
        groupId: $groupId
        pageParam: $pageParam
        searchType: $searchType
        searchAfter: $searchAfter
        categoryCode: $categoryCode
    ) {
        total
        list {
            ${Dto.Common.GROUP_PROJECT_LIST_ITEM}
        }
        searchAfter
    }
}
`;

    // 나의 학급 커뮤니티 리스트
    export const SELECT_GROUP_COMMUNITY_LIST = `
query(
    $term: String, 
    $query: String, 
    $groupId: String,
    $pageParam: PageParam, 
    $searchType: String, 
    $searchAfter: JSON,
) {
    selectGroupCommunityList(
        term: $term
        query: $query
        groupId: $groupId
        pageParam: $pageParam
        searchType: $searchType
        searchAfter: $searchAfter
    ) {
        total
        list {
            ${Dto.Discuss.Community}
        }
    }
}
`;

    // 가입학급 여부 조회
    export const SELECT_JOIN_GROUP = `
query($queryString: JSON) {
    selectJoinGroup(queryString: $queryString) {
        ${Dto.Common.GROUP}
    }
}
`;

    // 학급 기본정보 조회
    // 선생님인경우 학급오너권한 및 공지등록 권한 추가
    export const SELECT_GROUP_SIMPLE = `
query($id: ID!) {
    selectGroupSimple(id: $id) {
        id
        name
        image
        isGroupOwner
        warningNotice
    }
}
`;

    // 학급 스터디  리스트
    export const SELECT_GROUP_STUDY_LIST = `
query(
    $groupId: String,
    $progress: String,
    $activeTab: String,
    $pageParam: PageParam,
    $searchType: String,
    $searchAfter: JSON
) {
    selectGroupStudyList(
        groupId: $groupId,
        progress: $progress
        activeTab: $activeTab
        pageParam: $pageParam,
        searchType: $searchType,
        searchAfter: $searchAfter
    ) {
        total
        list {
            id
            title
            description
            categoryCode
            user {
                username
                nickname
                profileImage {
                    filename
                    imageType
                }
            }
            type
            target
            thumb
            likeCnt
            comment
            visit
            studyCnt
            difficulty
            requiredTime
            lecture {
                id
                title
                description
            }
            curriculum {
                id
                title
                description
            }
            progress
            userprogress
            group {
                homeworks {
                    id
                    title
                    description
                    due
                    submissions {
                        student
                        studentNo
                        name
                        project
                        lecture
                        submitDate
                    }
                }
                
            }
            isForHomework
            homework
            due
            created
            updated
            completed
            myProgress
        }
    }
}
`;

    // 학급 스터디 공유
    export const SHARE_TO_COPY_LECTURE_GROUP = `
mutation ($groupJson: JSON) {
    shareToCopyLectureGroup(
        groupJson: $groupJson
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    // 학급 스터디 삭제
    export const REMOVE_SHARE_LECTURE_GROUP = `
mutation( $groupJson: JSON ) {
    removeShareLectureGroup(groupJson: $groupJson) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    // 학급 과제 생성
    export const CREATE_HOMEWORK_FOR_GROUP = `
mutation ($groupJson: JSON) {
    createHomeworkForGroup(
        groupJson: $groupJson
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    // 학급 과제 수정
    export const UPDATE_HOMEWORK_FOR_GROUP = `
mutation ($groupJson: JSON) {
    updateHomeworkForGroup(
        groupJson: $groupJson
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    // 학급 스터디 수정
    export const UPDATE_STUDY_FOR_GROUP = `
mutation ($groupJson: JSON) {
    updateStudyForGroup(
        groupJson: $groupJson
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    // 학급 스터디모음 수정
    export const UPDATE_CURRICULUM_FOR_GROUP = `
mutation ($groupJson: JSON) {
    updateCurriculumForGroup(
        groupJson: $groupJson
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    // 학급 과제 제출 리스트
    export const SELECT_GROUP_SUBMISSIONS = `
query ($queryString: JSON) {
    selectGroupSubmission (
        queryString: $queryString
    ) {
        id
        title
        description
        due
        lecture
        curriculum
        created
        updated
        noProcessCount
        processCount
        completeCount
        homeworkstatus {
            studentCode
            studentNo
            studentName
            studentUser
            user
            status
            project
            lecture
            curriculum
            submitDate
        }
    }
}
`;

    // 학급 스터디 진행사항
    export const SELECT_GROUP_PROGRESS = `
query ($queryString: JSON) {
    selectGroupProgress (
        queryString: $queryString
    ) {
        id
        title
        description
        due
        lecture
        curriculum
        noProcessCount
        processCount
        completeCount
        students {
            studentCode
            studentNo
            studentName
            studentUser
            user
            status
            progress {
                studyIndex
                lecture
                status
                completedType
            }
        }
    }
}
`;
  }

  export namespace InstallFile {
    export const GET_INSTALL_FILES = `
    query($limit: Int, $category: String!, $page: Int) {
        installFiles(limit: $limit, category: $category, page: $page) {
            list {
                ${Dto.Common.INSTALL_FILE}
            }
            total
        }
    }
`;

    export const GET_LATEST_FILE = `
    query($category: String!) {
        latestInstallFile(category: $category) {
            ${Dto.Common.INSTALL_FILE}
        }
    }
`;
  }

  export namespace Lecture {
    export const CREATE_LECTURE = `
mutation CREATE_LECTURE(
    ${Dto.Lecture.CREATE_LECTURE_INPUT}
) {
    createLecture(
        ${Dto.Lecture.CREATE_LECTURE_MIDDLE}
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;
    export const UPDATE_LECTURE = `
mutation UPDATE_LECTURE(
    ${Dto.Lecture.UPDATE_LECTURE_INPUT}
) {
    updateLecture(
        ${Dto.Lecture.UPDATE_LECTURE_MIDDLE}
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const COPY_LECTURE = `
mutation COPY_LECTURE(
    $id: ID!
) {
    copyLecture(
        id: $id
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const DELETE_LECTURE = `
mutation DELETE_LECTURE(
    $id: ID!
) {
    deleteLecture(
        id: $id
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const BLAMED_LECTURE = `
mutation BLAMED_LECTURE( $id: ID! ) {
    blamedLecture( id: $id) {
        ${Dto.Common.LECTURE}
    }
}
`;

    export const SHOW_LECTURE = `
mutation SHOW_LECTURE( $id: ID! ) {
    showLecture( id: $id) {
        ${Dto.Common.LECTURE}
    }
}
`;

    export const SELECT_LECTURE = `
query SELECT_LECTURE($id: ID!, $groupId: ID, $studentId: ID){
    lecture(id: $id, groupId: $groupId, studentId: $studentId){
        ${Dto.Common.LECTURE}
    }
}
`;

    export const SELECT_LECTURE_WITH_INFOS = `
query SELECT_LECTURE_WITH_INFOS($id: ID!, $groupId: ID, $studentId: ID, $homeworkId: ID){
    lectureWithInfos(id: $id, groupId: $groupId, studentId: $studentId, homeworkId: $homeworkId){
        lecture {
            ${Dto.Common.LECTURE}
        }
        userProjects {
            ${Dto.Common.PROJECT}
        }
        student{
            ${Dto.Common.NEW_STUDENT}
        }
        group{
            ${Dto.Common.GROUP}
        }
    }
}
`;

    // 과제등록시 조회하는 스터디 리스트
    export const SELECT_LECTURE_FOR_HOMEWORK = `
query SELECT_LECTURE_FOR_HOMEWORK($id: ID!){
    selectLetureForHomework(id:$id){
        ${Dto.Common.LECTURE}
    }
}
`;
  }

  export namespace Like {
    export const CHECK_LIKE = `
query CHECK_LIKE($target: String!){
    checkLike(target: $target) {
        isLike
    }
}
`;

    export const LIKE = `
mutation LIKE($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {
    like(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {
        ${Dto.Common.LIKE}
    }
}
`;

    export const UNLIKE = `
mutation UNLIKE($target: String) {
    unlike(target: $target) {
        ${Dto.Common.LIKE}
    }
}
`;

    export const LIKE_LIST = `
query LIKE_LIST($target: String){
    likeList(target: $target) {
        total
        list {
            ${Dto.Common.LIKE_USER}
        }
    }
}
`;
  }

  export namespace MazeUser {
    export const SELECT_MAZE_USER = `
    query {
        mazeUser{
            lastStages
        }
    }
`;
  }

  export namespace Picture {
    export const GET_PICTURES = `
    query($category_main: String, $category_sub: String, $type: String, $userId: String, $pageParam: PageParam) {
        pictures(category_main: $category_main, category_sub: $category_sub, type: $type, userId: $userId, pageParam: $pageParam) {
            list {
                ${Dto.Common.PICTURE}
            }
        }
    }
`;

    export const SEARCH_PICTURES = `
    query($name: String, $type: String) {
        pictures(name: $name, type: $type) {
            list {
                ${Dto.Common.PICTURE}
            }
        }
    }
`;
  }

  export namespace Project {
    export const SELECT_PROJECT = `
query($id: ID! $groupId: ID) {
    project(id: $id, groupId: $groupId) {
        ${Dto.Common.PROJECT}
    }
 }
`;

    export const GET_CLOUD_SERVER_INFO = `
query($id: ID!) {
    cloudServerInfo(id: $id) {
        url
        query
    }
}
`;

    export const SELECT_STUDY_PROJECT = `
query SELECT_STUDY_PROJECT($id: ID!) {
    studyProject(id: $id) {
        ${Dto.Common.PROJECT}
    }
}
`;

    export const SELECT_PROJECTS = `
query SELECT_PROJECTS(
    ${Dto.Project.SELECT_PROJECTS_INPUT}
) {
    projectList(
        ${Dto.Project.SELECT_PROJECTS_MIDDLE}
    ) {
        total
        list {
            ${Dto.Common.PROJECT_LIST_ITEM}
        }
        last
        searchAfter
    }
}
`;

    export const SELECT_USER_PROJECTS = `
query SELECT_USER_PROJECTS(
    ${Dto.Project.SELECT_USER_PROJECTS_INPUT}
) {
    userProjectList(
        ${Dto.Project.SELECT_USER_PROJECTS_MIDDLE}
) {
        total
        list {
            ${Dto.Common.PROJECT_LIST_ITEM}
        }
        searchAfter
    }
}
`;

    export const SELECT_FOLLOWING_PROJECTS = `
query SELECT_FOLLOWING_PROJECTS(
    ${Dto.Project.SELECT_FOLLOWING_PROJECTS_INPUT}
) {
    followingProjectList(
        ${Dto.Project.SELECT_FOLLOWING_PROJECTS_MIDDLE}
) {
        total
        list {
            ${Dto.Common.PROJECT_LIST_ITEM}
        }
        searchAfter
    }
}
`;

    export const SELECT_FAVORITE_PROJECTS = `
query SELECT_FAVORITE_PROJECTS(
    $user: String!,
    $pageParam: PageParam
) {
    favoriteProjectList(
        user: $user,
        pageParam: $pageParam
) {
        total
        list {
            ${Dto.Common.PROJECT_LIST_ITEM}
        }
        searchAfter
    }
}
`;

    export const BESIDE_PROJECTS = `
query BESIDE_PROJECTS ($id: ID!, $user: String, $query: String) {
    besideProjects(id: $id, user: $user, query: $query) {
        list {
            id
        }
    }
}
`;

    export const CREATE_PROJECT = `
mutation CREATE_PROJECT(
    ${Dto.Project.CREATE_PROJECT_INPUT}
) {
    createProject(
        ${Dto.Project.CREATE_PROJECT_MIDDLE}
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const UPSERT_LECTURE_PROJECT = `
mutation UPSERT_LECTURE_PROJECT(
    ${Dto.Project.CREATE_PROJECT_INPUT}
) {
    upsertProjectForLecture (
        ${Dto.Project.CREATE_PROJECT_MIDDLE}
    ) {
        ${Dto.Common.PROJECT}
    }
}
`;

    export const UPDATE_PROJECT = `
mutation UPDATE_PROJECT(
    ${Dto.Project.UPDATE_PROJECT_INPUT}
) {
    updateProject(
        ${Dto.Project.UPDATE_PROJECT_MIDDLE}
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SHARE_GROUP_PROJECT_CANCEL = `
mutation SHARE_GROUP_PROJECT_CANCEL(
    $id: ID!
    $groupId: ID!
) {
    shareGroupProjectCancel(
        id: $id
        groupId: $groupId
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const REMOVE_PROJECT = `
mutation REMOVE_PROJECT($id: ID!) {
    removeProject(id: $id) {
        n
        nModified
        ok
    }
}
`;

    export const DELETE_PROJECT = `
mutation DELETE_PROJECT($id: ID!) {
    deleteProject(id: $id) {
        status
        result
    }
}
`;

    export const BLAMED_PROJECT = `
mutation BLAMED_PROJECT($id: ID! $groupId: ID) {
    blamedProject(id: $id groupId: $groupId) {
        status
        result
    }
}
`;

    export const SHOW_PROJECT = `
mutation SHOW_PROJECT($id: ID!) {
    showProject(id: $id) {
        status
        result
    }
}
`;

    export const DELETE_LECTURE_PROJECT = `
mutation DELETE_LECTURE_PROJECT($id: ID!) {
    deleteLectureProject(id: $id) {
        status
        result
    }
}
`;

    export const INCREASE_COUNTER = `
mutation INCREATE_COUNTER(
    $id: ID!
    $readCnt: Boolean
    $likeCnt: Boolean
    $commentCnt: Boolean
) {
    increaseCounter(id: $id, readCnt: $readCnt, likeCnt: $likeCnt, commentCnt: $commentCnt) {
        n
        nModified
        ok
    }
}
`;

    export const DECREASE_COUNTER = `
mutation DECREASE_COUNTER(
    $id: ID!
    $readCnt: Boolean
    $likeCnt: Boolean
    $commentCnt: Boolean
) {
    decreaseCounter(id: $id, readCnt: $readCnt, likeCnt: $likeCnt, commentCnt: $commentCnt) {
        n
        nModified
        ok
    }
}
`;

    export const SET_OPEN = `
mutation SET_OPEN($id: ID!, $isopen: Boolean) {
    setOpen(id: $id, isopen: $isopen) {
        n
        nModified
        ok
    }
}
`;

    export const SET_STAFF_PICKED = `
mutation SET_STAFF_PICKED($id: ID!, $staffPicked: Boolean) {
    setStaffPicked(id: $id, staffPicked: $staffPicked) {
        n
        nModified
        ok
    }
}
`;

    export const SWITCH_PROJECT_IS_OPEN = `
mutation SWITCH_PROJECT_IS_OPEN($id: ID!) {
    switchOpenProject(id: $id) {
        n
        nModified
        ok
    }
}
`;

    export const SAVE_PROJECT_COMPONENT_LOG = `
mutation SAVE_PROJECT_COMPONENT_LOG($logs: [JSON]) {
    saveProjectComponentLog(logs: $logs) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const CHECK_EXISTS_PROJECT_ID = `
query ($id: ID!) {
    existsProject (id: $id) {
        exists
    }
}
`;

    export const CHECK_EXISTS_PROJECT_AND_USER = `
query ($id: ID!, $username: String!) {
    existsUser (username: $username) {
        exists
    }
    existsProject (id: $id) {
        exists
    }
}
`;
  }

  export namespace Reflect {
    export const REFLECT_LIST = `
query($id: ID) {
    reflectList(id: $id) {
        total
        list {
            id
            category
            title
            content
            created
            url
            original
            picture
            group {
                name
            }
            created
        }
    }
}
`;

    export const REPORT_REFLECT = `
mutation ($reflectJson: JSON) {
reportReflect(reflectJson: $reflectJson) {
    ${Dto.Common.RESPONSE}
}
}
`;
  }

  export namespace Search {
    export const SELECT_ALL = `
query (
    $query: String, 
    $projectParam: PageParam
    $syllabusParam: PageParam
    $qnaParam: PageParam
    $tipsParam: PageParam
){
    projectList(query: $query, pageParam: $projectParam) {
        total
        list {
            ${Dto.Common.PROJECT_LIST_ITEM}
        }
    }
    syllabusList(query: $query, pageParam: $syllabusParam) {
        total
        list {
            ${Dto.Common.SYLLABUS}
        }
    }
    qnaList: discussList(query: $query, pageParam: $qnaParam, category: "qna") {
        total
        list {
            ${Dto.Common.DISCUSS}
        }
    }
    tipList: discussList(query: $query, pageParam: $tipsParam, category: "tips") {
        total
        list {
            ${Dto.Common.DISCUSS}
        }
    }
}
`;

    export const GET_POPULAR_SEARCH_WORD = `
query {
    popularSearchWord {
        words
    }
}
`;

    export const SET_POPULAR_SEARCH_WORD = `
mutation ($query: String) {
    addSearchWord(query: $query) {
        ${Dto.Common.RESPONSE}
    }
}
`;
  }

  export namespace Sound {
    export const GET_SOUNDS = `
query($category_main: String, $category_sub: String, $type: String, $userId: String, $pageParam: PageParam) {
    sounds(category_main: $category_main, category_sub: $category_sub, type: $type, userId: $userId, pageParam: $pageParam) {
        list {
            ${Dto.Common.SOUND}
        }
    }
}
`;

    export const SEARCH_SOUNDS = `
query($name: String, $type: String) {
    sounds(name: $name, type: $type) {
        list {
            ${Dto.Common.SOUND}
        }
    }
}
`;
  }

  export namespace Sprite {
    export const GET_SPRITES = `
    query($category_main: String, $category_sub: String, $type: String, $userId: String, $pageParam: PageParam) {
        sprites(category_main: $category_main, category_sub: $category_sub, type: $type, userId: $userId, pageParam: $pageParam) {
            list {
                ${Dto.Common.SPRITE}
            }
        }
    }
`;

    export const SEARCH_SPRITES = `
query($name: String, $type: String) {
        sprites(name: $name, type: $type) {
            list {
                ${Dto.Common.SPRITE}
            }
        }
    }
`;
  }

  export namespace Sticker {
    export const SELECT_STICKER = `
    query($title: String){
        sticker(title: $title){
            ${Dto.Common.STICKER}
        }
    }
`;
  }

  export namespace Syllabus {
    export const SELECT_SYLLABUS = `
    query SELECT_SYLLABUS(
        ${Dto.Syllabus.SELECT_SYLLABUS_INPUT}
    ) {
        syllabusList(
            ${Dto.Syllabus.SELECT_SYLLABUS_MIDDLE}
        ) {
            total
            list {
                ${Dto.Common.SYLLABUS_LIST_ITEM}
            }
            searchAfter
        }
    }
`;

    export const SELECT_USER_SYLLABUS = `
    query SELECT_USER_SYLLABUS(
        ${Dto.Syllabus.SELECT_USER_SYLLABUS_INPUT}
    ) {
        userSyllabusList(
            ${Dto.Syllabus.SELECT_USER_SYLLABUS_MIDDLE}
    ) {
            total
            list {
                ${Dto.Common.SYLLABUS_LIST_ITEM}
            }
            searchAfter
        }
    }
`;

    export const SELECT_FAVORITE_SYLLABUS = `
    query SELECT_FAVORITE_SYLLABUS(
        $user: String!,
        $pageParam: PageParam
    ) {
        favoriteSyllabusList(
            user: $user,
            pageParam: $pageParam
    ) {
            total
            list {
                ${Dto.Common.SYLLABUS_LIST_ITEM}
            }
        }
    }
`;

    export const SYLLABUS_PREV_NEXT = `
    query SYLLABUS_PREV_NEXT ($groupId: ID, $homework: Boolean, $created: Int) {
        syllabusPrevNext (groupId: $groupId, homework: $homework, created: $created) {
            next {
                type
                target
            }
            prev {
                type
                target
            }
        }
    }
`;
  }

  export namespace Table {
    export const GET_TABLE = `
    query($id: ID!) {
        table(id: $id) {
            ${Dto.Common.TABLE}
        }
    }
`;

    export const GET_TABLES = `
    query {
        tables {
            list {
                ${Dto.Common.TABLE_INFO}
            }
        }
    }
`;

    export const SEARCH_TABLES = `
    query($name: String) {
        tables(name: $name) {
            list {
                ${Dto.Common.TABLE_INFO}
            }
        }
    }
`;
  }

  export namespace Terms {
    export const GET_TERMS_LIST = `
    query($category: String) {
        termsList(category: $category) {
            list {
                id
                category
                description
                effectived
            }
        }
    }
`;

    export const GET_TERMS_BY_DATE = `
    query($date: String, $category: String) {
        termsByDate(date: $date, category: $category) {
            id
            category
            description
            effectived
        }
    }
`;
  }

  export namespace Topic {
    export const TOPIC_SUBSCRIPTION = `
subscription TOPIC_ADDED($target: String) {
    topicAdded(target: $target) {
      ${Dto.Common.TOPIC}
    }
}
`;

    export const ADD_TOPIC = `
mutation ADD_TOPIC(
${Dto.Topic.CREATE_TOPIC_INPUT}
) {
  addTopic(
    ${Dto.Topic.CREATE_TOPIC_MIDDLE}
  ) {
    status
    result {
      ${Dto.Common.TOPIC}
    }
  }
}
`;

    export const SELECT_TOPICS = `
query SELECT_TOPICS($pageParam: PageParam){
    topicList(pageParam: $pageParam) {
        hasNext
        list {
            ${Dto.Common.TOPIC}
        }
    }
}
`;

    export const READ_TOPICS = `
mutation {
  readTopics {
    ${Dto.Common.RESPONSE}
  }
}
`;

    export const DELETE_TOPICS = `
mutation {
  deleteAllTopics {
    ${Dto.Common.RESPONSE}
  }
}
`;

    export const DELETE_TOPIC = `
mutation($id: ID!) {
  deleteTopic(id: $id) {
    ${Dto.Common.RESPONSE}
  }
}
`;
  }

  export namespace User {
    const USER = `
id
username
nickname
role
isEmailAuth
isSnsAuth
isPhoneAuth
studentTerm
status {
    userStatus
}
profileImage {
    ${Dto.Common.PICTURE}
}
banned {
    username
    nickname
    reason
    bannedCount
    bannedType
    projectId
    startDate
    userReflect {
        status
        endDate
    }
}
`;

    const PERSONAL_INFO = ` 
mobile
email
grade
gender
isSnsId
`;

    export const CURRENT_USER_QUERY = `
query {
    me {
        ${USER}
    }
}
`;

    export const FIND_PERSONAL_INFO = `
query {
    me {
        ${USER}
    }
    personalInfo {
        ${PERSONAL_INFO}
    }
}
`;

    export const FIND_STUDENT_INFO = `
query {
    me {
        ${USER}
    }
    personalInfo {
        ${PERSONAL_INFO}
    }
    studentInfo {
        id
        studentCode
        studentNo
        studentName
        studentUser
        group {
            id
            name
        }
        status
    }
}
`;

    export const FIND_USER_BY_USERNAME = `
query ($username: String) {
    user(username: $username) {
        id
    }
}
`;

    export const FIND_USER_BY_NICKNAME = `
query ($nickname: String) {
    user(nickname: $nickname) {
        id
    }
}
`;

    export const FIND_USER_BY_HASHED_VALUE = `
query ($hashedValue: String) {
    hashedValueUser(hashedValue: $hashedValue) {
        id
        nickname
        username
    }
}
`;

    export const CHECK_EXISTS_EMAIL = `
query ($email: String) {
    existsUser(email: $email) {
        exists
    }
}
`;

    export const CHECK_EXISTS_MOBILE = `
query ($mobile: String) {
    existsUser(mobile: $mobile) {
        exists
    }
}
`;

    export const FIND_USERSTATUS_BY_USERNAME = `
query ($id: String) {
    userstatus(id: $id) {
        id
        nickname
        username
        description
        shortUrl
        profileImage {
            ${Dto.Common.PICTURE}
        }
        coverImage {
            ${Dto.Common.PICTURE}
        }
        role
        studentTerm
        status {
            project
            projectAll
            study
            studyAll
            community {
                qna
                tips
                free
            }
            following
            follower
            bookmark {
                project
                study
            }
            userStatus
        }
    }
}
`;

    export const REQUEST_MOBILE_AUTHENTICATION = `
mutation ($number: String!, $nationalNumber: String!, $contryCode: String) {
    mobileAuthentication(number: $number, nationalNumber: $nationalNumber, contryCode: $contryCode) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SEND_RECEIVE_NUMBER = `
mutation ($key: String!, $receiveNumber: String!) {
    sendReceiveNumber(key: $key, receiveNumber: $receiveNumber) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const CHECK_EXISTS_USERNAME = `
query ($username: String) {
    existsUser(username: $username) {
        exists
    }
}
`;

    export const CHECK_PROHIBITED_WORD = `
query ($type: String, $word: String) {
    prohibitedWord(type: $type, word: $word) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const CHECK_EXISTS_NICKNAME = `
query ($nickname: String) {
    existsUser(nickname: $nickname) {
        exists
    }
}
`;

    export const RECOMMEND_USER = `
query ($minCount: Int, $limit: Int) {
    recommendUser(minCount: $minCount, limit: $limit) {
        total
        list {
            id
            nickname
            username
            profileImage {
                ${Dto.Common.PICTURE}
            }
            coverImage {
                ${Dto.Common.PICTURE}
            }
        }
    }
}
`;

    export const SIGNIN_BY_USERNAME = `
mutation (
    $username: String!,
    $password: String!,
    $rememberme: Boolean,
    $captchaValue: String,
    $captchaKey: String,
    $captchaType: String
) {
    signinByUsername (
        username: $username,
        password: $password,
        rememberme: $rememberme,
        captchaValue: $captchaValue,
        captchaKey: $captchaKey,
        captchaType: $captchaType
    ) {
        ${USER}
    }
}
`;

    export const WITHDRAW_SIGNIN_BY_USERNAME = `
mutation (
    $username: String!,
    $password: String!,
    $rememberme: Boolean,
    $captchaValue: String,
    $captchaKey: String,
    $captchaType: String
) {
    withdrawSigninByUsername (
        username: $username,
        password: $password,
        rememberme: $rememberme,
        captchaValue: $captchaValue,
        captchaKey: $captchaKey,
        captchaType: $captchaType
    ) {
        ${USER}
    }
}
`;

    export const SIGNUP_BY_USERNAME = `
mutation ($role: String!, $grade: String!, $gender: String!, $nickname: String!, $email: String, $username: String!, $password: String!, $passwordConfirm: String!, $mobileKey: String) {
    signupByUsername(role: $role, grade: $grade , gender: $gender , nickname: $nickname , email: $email , username: $username , password: $password, passwordConfirm: $passwordConfirm, mobileKey: $mobileKey ) {
        ${USER}
    }
}
`;

    export const REMOVE_USER = `
mutation {
    removeUser {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const UNSUBSCRIBE_USER = `
mutation ($password: String!) {
    unsubscribeUser (password: $password) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SIGNOUT = `
mutation {
    signout {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SIGNIN_FOR_NAVER = `
mutation ($ses: String!, $idno: String!, $isWithdraw: Boolean) {
    signinForNaver(ses: $ses, idno: $idno, isWithdraw: $isWithdraw) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SIGNIN_FOR_NAVER_BEGIN = `
mutation {
    signinForNaverBegin {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SIGNIN_FOR_NAVER_CALLBACK = `
mutation ($code: String!, $state: String!) {
    signinForNaverCallback(code: $code, state: $state) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SIGNUP_FOR_NAVER = `
mutation ($role: String!, $grade: String!, $gender: String!, $nickname: String!, $mobileKey: String) {
    signupForNaver(role: $role, grade: $grade, gender: $gender, nickname: $nickname, mobileKey: $mobileKey) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SEND_FORGOT_PASSWORD = `
mutation ($email: String!) {
    sendForgotPassword (email: $email) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const CHANGE_TEACHER_TO_MEMBER = `
mutation {
    changeTeacherToMember {
        ${Dto.Common.RESPONSE}
    }
}
`;
    export const UPDATE_USERINFO = `
mutation UPDATE_USERINFO (
    $profileImage: String,
    $coverImage: String,
    $description: String,
    $nickname: String,
    $gender: String
    $mobileKey: String
) {
    updateUserInfo(
        profileImage: $profileImage,
        coverImage: $coverImage,
        description: $description
        nickname: $nickname
        gender: $gender
        mobileKey: $mobileKey
    ) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const CHANGE_USER_EMAIL = `
mutation ($email: String!) {
    changeUserEmail(email: $email) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const CHANGE_USER_PASSWORD = `
mutation ($password: String!, $newPassword: String!) {
    changeUserPassword(password: $password, newPassword: $newPassword) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const STUDENT_PASSWORD_AND_TERM = `
mutation ($password: String!, $password2: String!, $gender: String!) {
    studentPasswordAndTerm(password: $password, password2: $password2, gender: $gender) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const CHANGE_USER_PASSWORD_BY_HASHED_VALUE = `
mutation ($password: String!, $hashedValue: String!) {
    changeUserPasswordByHashedValue(password: $password, hashedValue: $hashedValue) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SNS_MAPPING_FOR_NAVER_BEGIN = `
mutation {
    snsMappingForNaverBegin {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SNS_MAPPING_FOR_NAVER = `
mutation ($email: String, $gender: String) {
    snsMappingForNaver (email: $email, gender: $gender) {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const SNS_CLEAR_FOR_NAVER = `
mutation {
    snsClearForNaver {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const TOGGLE_ALARM_ALLOW = `
mutation {
    toggleAlarmAllow {
        ${Dto.Common.RESPONSE}
    }
}
`;

    export const GET_CAPTCHA_DATA = `
query ($captchaType: String!) {
    getCaptchaData (captchaType: $captchaType) {
        ${Dto.Common.RESPONSE}
    }
}
`;
  }
}

export default Query;
