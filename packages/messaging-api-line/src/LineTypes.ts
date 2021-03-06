import { OnRequestFunction } from 'messaging-api-common';

export type ClientConfig = {
  accessToken: string;
  channelSecret: string;
  origin?: string;
  dataOrigin?: string;
  onRequest?: OnRequestFunction;
};

export type User = {
  displayName: string;
  userId: string;
  pictureUrl: string;
  statusMessage: string;
};

export type ImageMessage = {
  type: 'image';
  originalContentUrl: string;
  previewImageUrl: string;
};

export type ImageMapArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type ImageMapUriAction = {
  type: 'uri';
  label?: string;
  linkUri: string;
  area: ImageMapArea;
};

export type ImageMapMessageAction = {
  type: 'message';
  label?: string;
  text: string;
  area: ImageMapArea;
};

export type ImagemapMessage = {
  type: 'imagemap';
  baseUrl: string;
  altText: string;
  baseSize: {
    height: number;
    width: number;
  };
  video?: ImageMapVideo;
  actions: (ImageMapUriAction | ImageMapMessageAction)[];
};

export type VideoMessage = {
  type: 'video';
  originalContentUrl: string;
  previewImageUrl: string;
};

export type AudioMessage = {
  type: 'audio';
  originalContentUrl: string;
  duration: number;
};

export type Location = {
  title: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type LocationMessage = {
  type: 'location';
  title: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type StickerMessage = {
  type: 'sticker';
  packageId: string;
  stickerId: string;
};

export type PostbackAction = {
  type: 'postback';
  label?: string;
  data: string;
  text?: string;
  displayText?: string;
};

export type MessageAction = {
  type: 'message';
  label?: string;
  text: string;
};

export type URIAction = {
  type: 'uri';
  label?: string;
  uri: string;
};

export type DatetimePickerAction = {
  type: 'datetimepicker';
  label?: string;
  data: string;
  mode: string;
  initial?: string;
  max?: string;
  min?: string;
};

export type CameraAction = {
  type: 'camera';
  label: string;
};

export type CameraRollAction = {
  type: 'cameraRoll';
  label: string;
};

export type LocationAction = {
  type: 'location';
  label: string;
};

export type TemplateAction =
  | PostbackAction
  | MessageAction
  | URIAction
  | DatetimePickerAction;

export type QuickReplyAction =
  | PostbackAction
  | MessageAction
  | DatetimePickerAction
  | CameraAction
  | CameraRollAction
  | LocationAction;

export type QuickReply = {
  items: {
    type: 'action';
    imageUrl?: string;
    action: QuickReplyAction;
  }[];
};

/**
 * When sending a message from the LINE Official Account, you can specify the `sender.name` and the `sender.iconUrl` properties in Message objects.
 */
export type Sender = {
  /**
   * Display name. Certain words such as LINE may not be used.
   *
   * - Max character limit: 20
   */
  name?: string;

  /**
   * URL of the image to display as an icon when sending a message
   *
   * - Max character limit: 1000
   * - URL scheme: https
   */
  iconUrl?: string;
};

export type MessageOptions = {
  quickReply?: QuickReply;
  sender?: Sender;
};

export type TemplateMessage<Template> = {
  type: 'template';
  altText: string;
  template: Template;
};

export type ButtonsTemplate = {
  type: 'buttons';
  thumbnailImageUrl?: string;
  imageAspectRatio?: 'rectangle' | 'square';
  imageSize?: 'cover' | 'contain';
  imageBackgroundColor?: string;
  title?: string;
  text: string;
  defaultAction?: TemplateAction;
  actions: TemplateAction[];
};

export type ConfirmTemplate = {
  type: 'confirm';
  text: string;
  actions: TemplateAction[];
};

export type ColumnObject = {
  thumbnailImageUrl?: string;
  title?: string;
  text: string;
  defaultAction?: TemplateAction;
  actions: TemplateAction[];
};

export type CarouselTemplate = {
  type: 'carousel';
  columns: ColumnObject[];
  imageAspectRatio?: 'rectangle' | 'square';
  imageSize?: 'cover' | 'contain';
};

export type ImageCarouselColumnObject = {
  imageUrl: string;
  action: TemplateAction;
};

export type ImageCarouselTemplate = {
  type: 'image_carousel';
  columns: ImageCarouselColumnObject[];
};

export type Template =
  | ButtonsTemplate
  | ConfirmTemplate
  | CarouselTemplate
  | ImageCarouselTemplate;

export type Size = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type FlexBlockStyle = {
  backgroundColor?: string;
  separator?: boolean;
  separatorColor?: string;
};

export type FlexBubbleStyle = {
  header?: FlexBlockStyle;
  hero?: FlexBlockStyle;
  body?: FlexBlockStyle;
  footer?: FlexBlockStyle;
};

export type FlexButton = {
  type: 'button';
  action: TemplateAction;
  flex?: number;
  margin?: Size;
  height?: 'sm' | 'md';
  style?: 'link' | 'primary' | 'secondary';
  color?: string;
  gravity?: string;
};

export type FlexFiller = {
  type: 'filler';
};

export type FlexIcon = {
  type: 'icon';
  url: string;
  margin?: Size;
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | '3xl'
    | '4xl'
    | '5xl';
  asprctRatio?: '1:1' | '2:1' | '3:1';
};

export type FlexImage = {
  type: 'image';
  url: string;
  flex?: number;
  margin?: Size;
  align?: 'start' | 'end' | 'center';
  gravity?: 'top' | 'bottom' | 'center';
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | '3xl'
    | '4xl'
    | '5xl'
    | 'full';
  aspectRatio?:
    | '1:1'
    | '1.51:1'
    | '1.91:1'
    | '4:3'
    | '16:9'
    | '20:13'
    | '2:1'
    | '3:1'
    | '3:4'
    | '9:16'
    | '1:2'
    | '1:3';
  aspectMode?: 'cover' | 'fit';
  backgroundColor?: string;
  action?: TemplateAction;
};

export type FlexSeparator = {
  type: 'separator';
  margin?: Size;
  color?: string;
};

export type FlexSpacer = {
  type: 'spacer';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

export type FlexText = {
  type: 'text';
  text: string;
  flex?: number;
  margin?: Size;
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | '3xl'
    | '4xl'
    | '5xl';
  align?: 'start' | 'end' | 'center';
  gravity?: 'top' | 'bottom' | 'center';
  wrap?: boolean;
  maxLines?: number;
  weight?: 'regular' | 'bold';
  color?: string;
  action?: TemplateAction;
};

export type FlexBoxContent =
  // content
  | FlexButton
  | FlexIcon
  | FlexImage
  | FlexText
  // layout
  | FlexFiller
  | FlexSeparator
  | FlexSpacer;

export type FlexBoxLayout = 'horizontal' | 'vertical' | 'baseline';

/**
 * This is a component that defines the layout of child components.
 * You can also include a box in a box.
 */
export type FlexBox<L extends FlexBoxLayout> = {
  type: 'box';
  /**
   * The placement style of components in this box. Specify one of the following values:
   *
   * - `horizontal`: Components are placed horizontally. The `direction`
   *     property of the [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)
   *     container specifies the order.
   * - `vertical`: Components are placed vertically from top to bottom.
   * - `baseline`: Components are placed in the same way as `horizontal` is
   *     specified except the baselines of the components are aligned.
   *
   * For more information, see
   * [Types of box layouts](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-layout-types).
   */
  layout: L;
  /**
   * Components in this box. Here are the types of components available:
   *
   * - When the `layout` property is `horizontal` or `vertical`:
   *   + [Box](https://developers.line.biz/en/reference/messaging-api/#box)
   *   + [button](https://developers.line.biz/en/reference/messaging-api/#button)
   *   + [image](https://developers.line.biz/en/reference/messaging-api/#f-image)
   *   + [text](https://developers.line.biz/en/reference/messaging-api/#f-text)
   *   + [separator](https://developers.line.biz/en/reference/messaging-api/#separator)
   *   + [filler](https://developers.line.biz/en/reference/messaging-api/#filler)
   *   + [spacer (not recommended)](https://developers.line.biz/en/reference/messaging-api/#spacer)
   * - When the `layout` property is `baseline`:
   *   + [icon](https://developers.line.biz/en/reference/messaging-api/#icon)
   *   + [text](https://developers.line.biz/en/reference/messaging-api/#f-text)
   *   + [filler](https://developers.line.biz/en/reference/messaging-api/#filler)
   *   + [spacer (not recommended)](https://developers.line.biz/en/reference/messaging-api/#spacer)
   */
  contents: L extends 'baseline'
    ? (FlexIcon | FlexText | FlexFiller | FlexSpacer)[]
    : (
        | FlexBox<FlexBoxLayout>
        | FlexButton
        | FlexImage
        | FlexText
        | FlexSeparator
        | FlexFiller
        | FlexSpacer
      )[];
  /**
   * Background color of the block. In addition to the RGB color, an alpha
   * channel (transparency) can also be set. Use a hexadecimal color code.
   * (Example:#RRGGBBAA) The default value is `#00000000`.
   */
  backgroundColor?: string;
  /**
   * Color of box border. Use a hexadecimal color code.
   */
  borderColor?: string;
  /**
   * Width of box border. You can specify a value in pixels or any one of none,
   * light, normal, medium, semi-bold, or bold. none does not render a border
   * while the others become wider in the order of listing.
   */
  borderWidth?: 'none' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold';
  /**
   * Radius at the time of rounding the corners of the border. You can specify a
   * value in pixels or any one of `none`, `xs`, `sm`, `md`, `lg`, `xl`, or `xxl`. none does not
   * round the corner while the others increase in radius in the order of listing. The default value is none.
   */
  cornerRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /**
   * Width of the box. For more information, see [Width of a box](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-width) in the API documentation.
   */
  width?: string;
  /**
   * Height of the box. For more information, see [Height of a box](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-height) in the API documentation.
   */
  height?: string;
  /**
   * The ratio of the width or height of this box within the parent box. The
   * default value for the horizontal parent box is `1`, and the default value
   * for the vertical parent box is `0`.
   *
   * For more information, see
   * [Width and height of components](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-width-and-height).
   */
  flex?: number;
  /**
   * Minimum space between components in this box.
   *
   * - `none` does not set a space while the other values set a space whose
   *   size increases in the order of listing.
   * - The default value is `none`.
   * - To override this setting for a specific component, set the `margin`
   *   property of that component.
   */
  spacing?: Size;
  /**
   * Minimum space between this box and the previous component in the parent box.
   *
   * - `none` does not set a space while the other values set a space whose
   *   size increases in the order of listing.
   * - The default value is the value of the `spacing` property of the parent
   *   box.
   * - If this box is the first component in the parent box, the `margin`
   *   property will be ignored.
   */
  margin?: Size;
  /**
   * Free space between the borders of this box and the child element.
   * For more information, see [Box padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property) in the API documentation.
   */
  paddingAll?: string;
  /**
   * Free space between the border at the upper end of this box and the upper end of the child element.
   * For more information, see [Box padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property) in the API documentation.
   */
  paddingTop?: string;
  /**
   * Free space between the border at the lower end of this box and the lower end of the child element.
   * For more information, see [Box padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property) in the API documentation.
   */
  paddingBottom?: string;
  /**
   * Free space between the border at the left end of this box and the left end of the child element.
   * For more information, see [Box padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property) in the API documentation.
   */
  paddingStart?: string;
  /**
   * Free space between the border at the right end of this box and the right end of the child element.
   * For more information, see [Box padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property) in the API documentation.
   */
  paddingEnd?: string;
  /**
   * Action performed when this button is tapped.
   *
   * Specify an [action object](https://developers.line.biz/en/reference/messaging-api/#action-objects).
   */
  action?: TemplateAction;
} & Offset;

export type Offset = {
  /**
   * Reference position for placing this box. Specify one of the following values:
   * - `relative`: Use the previous box as reference.
   * - `absolute`: Use the top left of parent element as reference.
   *
   * The default value is relative.
   * For more information, see [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset) in the API documentation.
   */
  position?: 'relative' | 'absolute';
  /**
   * The top offset.
   * For more information, see [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset) in the API documentation.
   */
  offsetTop?: string;
  /**
   * The bottom offset.
   * For more information, see [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset) in the API documentation.
   */
  offsetBottom?: string;
  /**
   * The left offset.
   * For more information, see [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset) in the API documentation.
   */
  offsetStart?: string;
  /**
   * The right offset.
   * For more information, see [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset) in the API documentation.
   */
  offsetEnd?: string;
};

export type FlexBubbleContainer = {
  type: 'bubble';
  direction?: 'ltr' | 'rtl';
  header?: FlexBox<FlexBoxLayout>;
  hero?: FlexImage;
  body?: FlexBox<FlexBoxLayout>;
  footer?: FlexBox<FlexBoxLayout>;
  styles?: FlexBubbleStyle;
};

export type FlexCarouselContainer = {
  type: 'carousel';
  contents: FlexBubbleContainer[];
};

export type FlexContainer = FlexBubbleContainer | FlexCarouselContainer;

export type FlexMessage = {
  type: 'flex';
  altText: string;
  contents: FlexContainer;
};

export type Message = (
  | TextMessage
  | ImageMessage
  | ImagemapMessage
  | VideoMessage
  | AudioMessage
  | LocationMessage
  | StickerMessage
  | TemplateMessage<Template>
  | FlexMessage
) & {
  quickReply?: QuickReply;
  sender?: Sender;
};

type Area = {
  bounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  action: {
    type: string;
    data: string;
  };
};

export type RichMenu = {
  size: {
    width: 2500;
    height: 1686 | 843;
  };
  selected: boolean;
  name: string;
  chatBarText: string;
  areas: Area[];
};

export type LiffView = {
  type: 'compact' | 'tall' | 'full';
  url: string;
};

export type MutationSuccessResponse = {};

export type ImageMapVideo = {
  originalContentUrl: string;
  previewImageUrl: string;
  area: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  externalLink: {
    linkUri: string;
    label: string;
  };
};

export type TextMessage = {
  type: 'text';
  text: string;
};

export type NumberOfMessagesSentResponse = InsightStatisticsResponse & {
  /**
   * The number of messages sent with the Messaging API on the date specified in date.
   * The response has this property only when the value of status is `ready`.
   */
  success?: number;
};

export type TargetLimitForAdditionalMessages = {
  /**
   * One of the following values to indicate whether a target limit is set or not.
   *  - `none`: This indicates that a target limit is not set.
   *  - `limited`: This indicates that a target limit is set.
   */
  type: 'none' | 'limited';
  /**
   * The target limit for additional messages in the current month.
   * This property is returned when the `type` property has a value of `limited`.
   */
  value?: number;
};

export type NumberOfMessagesSentThisMonth = {
  /**
   * The number of sent messages in the current month
   */
  totalUsage: number;
};

export type InsightStatisticsResponse = {
  /**
   * Calculation status. One of:
   * - `ready`: Calculation has finished; the numbers are up-to-date.
   * - `unready`: We haven't finished calculating the number of sent messages for the specified `date`. Calculation usually takes about a day. Please try again later.
   * - `out_of_service`: The specified `date` is earlier than the date on which we first started calculating sent messages. Different APIs have different date. Check them at the [document](https://developers.line.biz/en/reference/messaging-api/).
   */
  status: 'ready' | 'unready' | 'out_of_service';
};

export type NumberOfMessageDeliveries = InsightStatisticsResponse & {
  /**
   * Number of push messages sent to **all** of this LINE official account's friends (broadcast messages).
   */
  broadcast: number;
  /**
   * Number of push messages sent to **some** of this LINE official account's friends, based on specific attributes (targeted/segmented messages).
   */
  targeting: number;
  /**
   * Number of auto-response messages sent.
   */
  autoResponse: number;
  /**
   * Number of greeting messages sent.
   */
  welcomeResponse: number;
  /**
   * Number of messages sent from LINE Official Account Manager [Chat screen](https://www.linebiz.com/jp-en/manual/OfficialAccountManager/chats/screens/).
   */
  chat: number;
  /**
   * Number of broadcast messages sent with the [Send broadcast message](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message) Messaging API operation.
   */
  apiBroadcast: number;
  /**
   * Number of push messages sent with the [Send push message](https://developers.line.biz/en/reference/messaging-api/#send-push-message) Messaging API operation.
   */
  apiPush: number;
  /**
   * Number of multicast messages sent with the [Send multicast message](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message) Messaging API operation.
   */
  apiMulticast: number;
  /**
   * Number of replies sent with the [Send reply message](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) Messaging API operation.
   */
  apiReply: number;
};

export type NumberOfFollowers = InsightStatisticsResponse & {
  /**
   * The number of times, as of the specified `date`, that a user added this LINE official account as a friend. The number doesn't decrease when a user blocks the account after adding it, or when they delete their own account.
   */
  followers: number;
  /**
   * The number of users, as of the specified `date`, that the official account can reach with messages targeted by gender, age, or area. This number includes users for whom we estimated demographic attributes based on their activity in LINE and LINE-connected services.
   */
  targetedReaches: number;
  /**
   * The number of users blocking the account as of the specified `date`. The number decreases when a user unblocks the account.
   */
  blocks: number;
};

export type NumberOfMessageDeliveriesResponse =
  | InsightStatisticsResponse
  | NumberOfMessageDeliveries;

export type NumberOfFollowersResponse =
  | InsightStatisticsResponse
  | NumberOfFollowers;

type PercentageAble = {
  percentage: number;
};

export type FriendDemographics = {
  /**
   * `true` if friend demographic information is available.
   */
  available: boolean;
  /**
   * Percentage per gender
   */
  genders?: Array<
    {
      /**
       * Gender
       */
      gender: 'unknown' | 'male' | 'female';
    } & PercentageAble
  >;
  /**
   * Percentage per age group
   */
  ages?: Array<
    {
      /**
       * Age group
       */
      age: string;
    } & PercentageAble
  >;
  /**
   * Percentage per area
   */
  areas?: Array<
    {
      area: string;
    } & PercentageAble
  >;
  /**
   * Percentage by OS
   */
  appTypes?: Array<
    {
      appType: 'ios' | 'android' | 'others';
    } & PercentageAble
  >;
  /**
   * Percentage per friendship duration
   */
  subscriptionPeriods?: Array<
    {
      /**
       * Friendship duration
       */
      subscriptionPeriod:
        | 'over365days'
        | 'within365days'
        | 'within180days'
        | 'within90days'
        | 'within30days'
        | 'within7days'
        // in case for some rare cases(almost no)
        | 'unknown';
    } & PercentageAble
  >;
};

/* LINE Pay */
export type LinePayConfig = {
  channelId: string;
  channelSecret: string;
  sandbox?: boolean;
  origin?: string;
};

export type LinePayCurrency = 'USD' | 'JPY' | 'TWD' | 'THB';

/* Narrowcast */

export type AccessTokenOptions = {
  accessToken?: string;
};

export type NarrowcastOptions = AccessTokenOptions & {
  recipient?: RecipientObject;
  demographic?: DemographicFilterObject;
  max?: number;
};

// reference: https://github.com/line/line-bot-sdk-nodejs/pull/193/files
export type FilterOperatorObject<T> = {
  type: 'operator';
} & (
  | {
      and: T | (T | FilterOperatorObject<T>)[];
    }
  | {
      or: T | (T | FilterOperatorObject<T>)[];
    }
  | {
      not: T | (T | FilterOperatorObject<T>)[];
    }
);

export type AudienceObject = {
  type: 'audience';
  audienceGroupId: number;
};

export type RecipientObject =
  | AudienceObject
  | FilterOperatorObject<AudienceObject>;

export type DemographicAge =
  | 'age_15'
  | 'age_20'
  | 'age_25'
  | 'age_30'
  | 'age_35'
  | 'age_40'
  | 'age_45'
  | 'age_50';

export type DemographicSubscriptionPeriod =
  | 'day_7'
  | 'day_30'
  | 'day_90'
  | 'day_180'
  | 'day_365';

export type DemographicArea =
  | 'jp_01'
  | 'jp_02'
  | 'jp_03'
  | 'jp_04'
  | 'jp_05'
  | 'jp_06'
  | 'jp_07'
  | 'jp_08'
  | 'jp_09'
  | 'jp_10'
  | 'jp_11'
  | 'jp_12'
  | 'jp_13'
  | 'jp_14'
  | 'jp_15'
  | 'jp_16'
  | 'jp_17'
  | 'jp_18'
  | 'jp_19'
  | 'jp_20'
  | 'jp_21'
  | 'jp_22'
  | 'jp_23'
  | 'jp_24'
  | 'jp_25'
  | 'jp_26'
  | 'jp_27'
  | 'jp_28'
  | 'jp_29'
  | 'jp_30'
  | 'jp_31'
  | 'jp_32'
  | 'jp_33'
  | 'jp_34'
  | 'jp_35'
  | 'jp_36'
  | 'jp_37'
  | 'jp_38'
  | 'jp_39'
  | 'jp_40'
  | 'jp_41'
  | 'jp_42'
  | 'jp_43'
  | 'jp_44'
  | 'jp_45'
  | 'jp_46'
  | 'jp_47'
  | 'tw_01'
  | 'tw_02'
  | 'tw_03'
  | 'tw_04'
  | 'tw_05'
  | 'tw_06'
  | 'tw_07'
  | 'tw_08'
  | 'tw_09'
  | 'tw_10'
  | 'tw_11'
  | 'tw_12'
  | 'tw_13'
  | 'tw_14'
  | 'tw_15'
  | 'tw_16'
  | 'tw_17'
  | 'tw_18'
  | 'tw_19'
  | 'tw_20'
  | 'tw_21'
  | 'tw_22'
  | 'th_01'
  | 'th_02'
  | 'th_03'
  | 'th_04'
  | 'th_05'
  | 'th_06'
  | 'th_07'
  | 'th_08'
  | 'id_01'
  | 'id_02'
  | 'id_03'
  | 'id_04'
  | 'id_06'
  | 'id_07'
  | 'id_08'
  | 'id_09'
  | 'id_10'
  | 'id_11'
  | 'id_12'
  | 'id_05';

export type DemographicObject =
  | {
      type: 'gender';
      oneOf: ('male' | 'female')[];
    }
  | ({
      type: 'age';
    } & (
      | {
          gte: DemographicAge;
        }
      | {
          lt: DemographicAge;
        }
    ))
  | {
      type: 'appType';
      oneOf: ('ios' | 'android')[];
    }
  | {
      type: 'area';
      oneOf: DemographicArea[];
    }
  | ({
      type: 'subscriptionPeriod';
    } & (
      | {
          gte: DemographicSubscriptionPeriod;
        }
      | {
          lt: DemographicSubscriptionPeriod;
        }
    ));

export type DemographicFilterObject =
  | DemographicObject
  | FilterOperatorObject<DemographicObject>;

export type NarrowcastProgressResponse = (
  | {
      phase: 'waiting';
    }
  | ((
      | {
          phase: 'sending' | 'succeeded';
        }
      | {
          phase: 'failed';
          failedDescription: string;
        }
    ) & {
      successCount: number;
      failureCount: number;
      targetCount: string;
    })
) & {
  errorCode?: 1 | 2;
};

/* Audience */

export type CreateUploadAudienceGroupOptions = AccessTokenOptions & {
  uploadDescription?: string;
};

export type UpdateUploadAudienceGroupOptions = CreateUploadAudienceGroupOptions & {
  description?: string;
};

export type CreateClickAudienceGroupOptions = AccessTokenOptions & {
  clickUrl?: string;
};

export type Audience = {
  id: string;
};

export type BasicAudienceGroup = {
  /** The audience ID. */
  audienceGroupId: number;

  /** The audience's name. */
  description: string;

  /** When the audience was created (in UNIX time). */
  created: number;

  /**
   * The value specified when creating an audience for uploading user IDs to indicate the type of accounts that will be given as recipients. One of:
   * - true: Accounts are specified with IFAs.
   * - false (default): Accounts are specified with user IDs.
   */
  isIfaAudience: string;

  /**
   * Audience's update permission. Audiences linked to the same channel will be READ_WRITE.
   * - READ: Can use only.
   * - READ_WRITE: Can use and update.
   */
  permission: 'READ' | 'READ_WRITE';

  /** How the audience was created. If omitted, all audiences are included. */
  createRoute: 'OA_MANAGER' | 'MESSAGING_API';
};

export type UploadAudienceGroup = BasicAudienceGroup & {
  type: 'UPLOAD';
};

export type ImpAudienceGroup = BasicAudienceGroup & {
  type: 'IMP';

  // The request ID that was specified when the audience was created.
  requestId: string;
};

export type ClickAudienceGroup = BasicAudienceGroup & {
  type: 'CLICK';

  /** The request ID that was specified when the audience was created. */
  requestId: string;

  /** The URL that was specified when the audience was created. */
  clickUrl?: string;
};

export type AudienceGroup = (
  | UploadAudienceGroup
  | ImpAudienceGroup
  | ClickAudienceGroup
) & {
  audienceCount: number;
} & (
    | {
        status: 'IN_PROGRESS' | 'READY' | 'EXPIRED';
      }
    | {
        status: 'FAILED';
        failedType: 'AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT' | 'INTERNAL_ERROR';
      }
  );

export type AudienceGroups = {
  /** An array of audience data. */
  audienceGroups: AudienceGroup[];

  /** true when this is not the last page. */
  hasNextPage: boolean;

  /** The total number of audiences that can be returned with the specified filter. */
  totalCount: number;

  /** Of the audiences you can get with the specified condition, the number of audiences with the update permission set to READ_WRITE. */
  readWriteAudienceGroupTotalCount: number;

  /** The current page number. */
  page: number;

  /** The number of audiences on the current page. */
  size: number;
};

export type Job = {
  /** A job ID. */
  audienceGroupJobId: number;

  /** An audience ID. */
  audienceGroupId: number;

  /** The job's description. */
  description: string;

  /**
   * The job's type. One of:
   * - DIFF_ADD: Indicates that a user ID or IFA was added via the Messaging API.
   */
  type: 'DIFF_ADD';

  /** The number of accounts (recipients) that were added or removed. */
  audienceCount: number;

  /** When the job was created (in UNIX time). */
  created: number;
} & (
  | {
      /** The job's status. */
      jobStatus: 'QUEUED' | 'WORKING' | 'FINISHED';
    }
  | {
      /** The job's status. */
      jobStatus: 'FAILED';

      /** The reason why the operation failed. This is only included when jobs[].jobStatus is */
      failedType: 'INTERNAL_ERROR';
    }
);

export type AudienceGroupWithJob = AudienceGroup & {
  /** An array of jobs. This array is used to keep track of each attempt to add new user IDs or IFAs to an audience for uploading user IDs. null is returned for any other type of audience. */
  jobs: Job[];
};

export type GetAudienceGroupsOptions = AccessTokenOptions & {
  page?: number;
  description?: string;
  status?: string;
  size?: number;
};

export type AudienceGroupAuthorityLevel = {
  authorityLevel: 'PUBLIC' | 'PRIVATE';
};

/**
 * LINE Notify Config
 */
export type LineNotifyConfig = {
  /**
   * LINE Notify Service Client ID
   */
  clientId: string;

  /**
   * LINE Notify Service Client Secret
   */
  clientSecret: string;

  /**
   * LINE Notify Service Callback URL
   */
  redirectUri: string;

  /**
   * LINE Notify Authentication URL origin
   */
  origin?: string;

  /**
   * LINE Notify Notification URL origin
   */
  apiOrigin?: string;
};

export type LineNotifyOptions = {
  /**
   * Maximum size of 240×240px JPEG
   */
  imageThumbnail?: string;

  /**
   * Maximum size of 2048×2048px JPEG
   */
  imageFullsize?: string;

  /**
   * Package ID.
   */
  stickerPackageId?: number;

  /**
   * 	Sticker ID.
   */
  stickerId?: number;

  /**
   * - true: The user doesn't receive a push notification when the message is sent.
   * - false: The user receives a push notification when the message is sent (unless they have disabled push notification in LINE and/or their device).
   *
   * If omitted, the value defaults to false.
   */
  notificationDisabled?: boolean;
};
