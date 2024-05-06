export default {
  scalars: [
    3, 4, 5, 6, 8, 10, 11, 12, 17, 20, 21, 23, 27, 30, 33, 34, 36, 40, 41, 50,
    54, 61, 64, 67, 68, 84,
  ],
  types: {
    Query: {
      getBrandAssets: [
        1,
        {
          brandId: [4, "String!"],
        },
      ],
      getPlatformConnections: [9],
      getBusinessAccountAssets: [13],
      getCreativeAnalyticsSummary: [
        14,
        {
          filter: [18, "CreativeAnalyticFilter!"],
        },
      ],
      getInsights: [
        24,
        {
          filter: [18, "CreativeAnalyticFilter!"],
        },
      ],
      getTagsByUsage: [
        28,
        {
          filter: [18, "CreativeAnalyticFilter!"],
        },
      ],
      getHighlights: [
        29,
        {
          filter: [18, "CreativeAnalyticFilter!"],
        },
      ],
      getTagRanking: [
        31,
        {
          tagFilter: [38, "[TagFilterInput!]"],
          orderingColumn: [39],
          filter: [18, "CreativeAnalyticFilter!"],
        },
      ],
      getAdProfile: [
        42,
        {
          filter: [18, "CreativeAnalyticFilter!"],
          adId: [4, "String!"],
        },
      ],
      getTagSummary: [
        43,
        {
          filter: [18, "CreativeAnalyticFilter!"],
        },
      ],
      getTagUsageRanking: [
        45,
        {
          filter: [18, "CreativeAnalyticFilter!"],
        },
      ],
      getCreativePerformanceOverTime: [
        46,
        {
          metric: [4, "String!"],
          adId: [4, "String!"],
          filter: [18, "CreativeAnalyticFilter!"],
        },
      ],
      getTagPerformanceOverTime: [
        48,
        {
          scale: [50],
          metric: [4, "String!"],
          filter: [18, "CreativeAnalyticFilter!"],
        },
      ],
      getTagPerformanceOverTimeAllChannel: [
        48,
        {
          scale: [50],
          metric: [4, "String!"],
          filter: [18, "CreativeAnalyticFilter!"],
        },
      ],
      getBrandTags: [
        28,
        {
          brandId: [4, "String!"],
        },
      ],
      getCreativeProfile: [
        51,
        {
          filter: [55, "CreativeProfileInput!"],
        },
      ],
      getPerformanceMetrics: [
        56,
        {
          filter: [58, "PerformanceMetricFiltersInput!"],
          brandId: [4, "String!"],
        },
      ],
      folder: [
        59,
        {
          input: [62, "CreativeLibraryFilter!"],
        },
      ],
      validateInvitationCode: [
        4,
        {
          invitationCode: [4, "String!"],
        },
      ],
      getLoggedInUser: [63],
      __typename: [4],
    },
    BrandAssetsResponse: {
      adAccounts: [2],
      socialAccounts: [7],
      __typename: [4],
    },
    AdAccount: {
      id: [3],
      originalId: [4],
      platform: [5],
      type: [6],
      name: [4],
      __typename: [4],
    },
    ID: {},
    String: {},
    Platform: {},
    AdAccountType: {},
    SocialAccount: {
      id: [3],
      originalId: [4],
      platform: [5],
      type: [8],
      name: [4],
      __typename: [4],
    },
    SocialAccountType: {},
    PlatformState: {
      platform: [5],
      status: [10],
      userEmail: [4],
      expirationDate: [11],
      createdAt: [11],
      updatedAt: [11],
      totalAds: [12],
      totalCreatives: [12],
      extractedAds: [12],
      extractedCreatives: [12],
      __typename: [4],
    },
    ConnectionState: {},
    DateTime: {},
    Int: {},
    IntegrationsAssets: {
      adAccounts: [2],
      socialAccounts: [7],
      __typename: [4],
    },
    MetricsSummary: {
      creativesTotal: [12],
      adsTotal: [12],
      spendTotal: [12],
      metrics: [15],
      __typename: [4],
    },
    Metrics: {
      spend: [16],
      usage: [16],
      impressions: [16],
      adRecallRate: [16],
      reach: [16],
      bai: [16],
      engagement: [16],
      engagementRate: [16],
      costPerEngagement: [16],
      videoViews: [16],
      videoThroughRate: [16],
      costPerCompletedView: [16],
      clicks: [16],
      clickThroughRate: [16],
      costPerClick: [16],
      frequency: [16],
      costPerMille: [16],
      conversion: [16],
      conversionRate: [16],
      costPerAcquisition: [16],
      leads: [16],
      leadRate: [16],
      costPerLead: [16],
      appInstall: [16],
      appInstallRate: [16],
      costPerAppInstall: [16],
      fiveSecondsIndex: [16],
      textSaliencyScore: [16],
      logoSaliencyScore: [16],
      __typename: [4],
    },
    MetricValue: {
      value: [17],
      __typename: [4],
    },
    Float: {},
    CreativeAnalyticFilter: {
      brandId: [3],
      range: [19],
      campaignObjective: [20],
      superClass: [21],
      tags: [22],
      channels: [23],
      __typename: [4],
    },
    TimeRange: {
      init: [11],
      end: [11],
      __typename: [4],
    },
    CampaignObjective: {},
    SuperClass: {},
    TagInput: {
      tagSuperClass: [4],
      tagClass: [4],
      tagValue: [4],
      channel: [23],
      __typename: [4],
    },
    Channel: {},
    Insight: {
      tag: [25],
      spend: [17],
      usage: [12],
      campaignObjective: [20],
      result: [26],
      costResult: [26],
      expectedImpact: [12],
      channel: [23],
      __typename: [4],
    },
    Tag: {
      tagSuperClass: [4],
      tagClass: [4],
      tagValue: [4],
      importance: [17],
      __typename: [4],
    },
    MetricVariance: {
      metric: [27],
      variance: [17],
      value: [17],
      average: [17],
      __typename: [4],
    },
    Metric: {},
    TreeNode: {
      key: [4],
      nestedTotal: [12],
      children: [28],
      __typename: [4],
    },
    Highlight: {
      advertisementId: [4],
      fileType: [30],
      url: [4],
      campaignObjective: [20],
      result: [26],
      costResult: [26],
      channel: [23],
      __typename: [4],
    },
    FileType: {},
    TagOverallMetrics: {
      tag: [25],
      channels: [23],
      tip: [32],
      creativesTotal: [37],
      adsTotal: [37],
      spendTotal: [37],
      impressionsTotal: [37],
      engagementRate: [26],
      costPerEngagement: [26],
      videoThroughRate: [26],
      clickThroughRate: [26],
      leadRate: [26],
      conversionRate: [26],
      appInstallRate: [26],
      costPerMille: [26],
      costPerClick: [26],
      costPerLead: [26],
      costPerAcquisition: [26],
      costPerAppInstall: [26],
      costPerCompletedView: [26],
      frequency: [26],
      __typename: [4],
    },
    Tip: {
      value: [33],
      detail: [34],
      placeHolders: [35],
      __typename: [4],
    },
    TipValue: {},
    TipDetail: {},
    TipPlaceHolder: {
      value: [4],
      key: [4],
      type: [36],
      __typename: [4],
    },
    PlaceHolderType: {},
    TotalValue: {
      value: [17],
      total: [17],
      __typename: [4],
    },
    TagFilterInput: {
      tagSuperClass: [4],
      tagClass: [4],
      tagValue: [4],
      __typename: [4],
    },
    TagRankingOrderingInput: {
      orderingColumn: [40],
      orderingDirection: [41],
      pageNumber: [12],
      pageSize: [12],
      __typename: [4],
    },
    TagRankingOrderingColumn: {},
    OrderingDirection: {},
    AdProfile: {
      advertisementId: [4],
      name: [4],
      fileType: [30],
      url: [4],
      campaignObjective: [20],
      channel: [23],
      heatMapUrl: [4],
      metrics: [15],
      tags: [25],
      __typename: [4],
    },
    TagSummary: {
      campaignObjective: [20],
      channel: [23],
      creativesTotal: [17],
      adsTotal: [17],
      spendTotal: [17],
      frequency: [44],
      costPerMile: [44],
      engagementRate: [44],
      costPerEngagement: [44],
      videoThroughRate: [44],
      costPerCompletedVideo: [44],
      clickThroughRate: [44],
      costPerClick: [44],
      leadRate: [44],
      costPerLead: [44],
      conversionRate: [44],
      costPerAcquisition: [44],
      appInstallRate: [44],
      costPerAppInstall: [44],
      __typename: [4],
    },
    MetricRange: {
      max: [17],
      min: [17],
      __typename: [4],
    },
    TagMetric: {
      tag: [25],
      channel: [23],
      metrics: [15],
      __typename: [4],
    },
    DataPerformanceEntry: {
      date: [4],
      data: [47],
      __typename: [4],
    },
    SerialData: {
      main_0: [17],
      metric_0: [17],
      main_1: [17],
      metric_1: [17],
      main_2: [17],
      metric_2: [17],
      main_3: [17],
      metric_3: [17],
      main_4: [17],
      __typename: [4],
    },
    PerformanceDataEntry: {
      date: [4],
      data: [49],
      __typename: [4],
    },
    SerialEntry: {
      key: [4],
      main: [17],
      metric: [17],
      __typename: [4],
    },
    Scale: {},
    CreativeProfile: {
      creativeId: [4],
      name: [4],
      fileType: [30],
      url: [4],
      clipEmbeddingUrl: [4],
      heatMapUrl: [4],
      metrics: [52],
      tags: [25],
      __typename: [4],
    },
    CreativeMetrics: {
      adRecallRate: [53],
      bai: [53],
      fiveSecondsIndex: [53],
      textSaliencyScore: [53],
      logoSaliencyScore: [53],
      __typename: [4],
    },
    CreativeMetricValue: {
      value: [17],
      labeledValue: [54],
      __typename: [4],
    },
    LabeledMetricValue: {},
    CreativeProfileInput: {
      brandId: [3],
      creativeId: [3],
      __typename: [4],
    },
    ChannelPerformanceMetrics: {
      channel: [23],
      metrics: [57],
      __typename: [4],
    },
    PerformanceMetrics: {
      engagementRate: [53],
      videoThroughRate: [53],
      clickThroughRate: [53],
      __typename: [4],
    },
    PerformanceMetricFiltersInput: {
      targetingAgeMax: [12],
      targetingAgeMin: [12],
      campaignObjective: [20],
      targetingGenders: [12],
      spendUsd: [12],
      clipEmbeddingUrl: [4],
      __typename: [4],
    },
    CreativeLibraryFolder: {
      id: [17],
      parentId: [17],
      path: [4],
      folders: [59],
      creatives: [60],
      createdAt: [11],
      updatedAt: [11],
      __typename: [4],
    },
    CreativeLibraryItem: {
      creativeId: [4],
      name: [4],
      fileType: [4],
      url: [4],
      clipEmbeddingUrl: [4],
      status: [61],
      createdAt: [11],
      updatedAt: [11],
      __typename: [4],
    },
    CreativeStatus: {},
    CreativeLibraryFilter: {
      brandId: [4],
      folderId: [12],
      __typename: [4],
    },
    User: {
      id: [3],
      createdAt: [11],
      updatedAt: [11],
      email: [4],
      name: [4],
      isAdmin: [64],
      businessAccount: [65],
      termsAndConditionsAccepted: [11],
      emailVerified: [64],
      isContractValid: [64],
      __typename: [4],
    },
    Boolean: {},
    BusinessAccount: {
      id: [3],
      createdAt: [11],
      updatedAt: [11],
      businessName: [4],
      users: [63],
      brands: [66],
      businessLogoUrl: [4],
      businessPhone: [4],
      website: [4],
      address: [4],
      __typename: [4],
    },
    Brand: {
      id: [3],
      createdAt: [11],
      updatedAt: [11],
      name: [4],
      logoUrl: [4],
      sector: [67],
      adAccounts: [4],
      socialAccounts: [4],
      status: [68],
      businessAccount: [65],
      __typename: [4],
    },
    Sector: {},
    BrandStatus: {},
    Mutation: {
      createBrand: [
        66,
        {
          input: [70, "CreateBrandInput!"],
        },
      ],
      updateBrand: [
        66,
        {
          input: [71, "UpdateBrandInput!"],
          brandId: [4, "String!"],
        },
      ],
      updateBrandAssets: [
        72,
        {
          input: [73, "BrandAssetsInput!"],
          brandId: [4, "String!"],
        },
      ],
      requestLogoUploadData: [
        76,
        {
          input: [78, "UploadRequestInput!"],
        },
      ],
      createBusinessAccount: [
        65,
        {
          input: [79, "CreateBusinessAccountInput!"],
        },
      ],
      updateBusinessAccount: [
        65,
        {
          input: [80, "UpdateBusinessAccountInput!"],
        },
      ],
      cancelBusinessAccount: [65],
      createPlatformIntegration: [
        13,
        {
          redirectUri: [4],
          authCode: [4, "String!"],
          platform: [5, "Platform!"],
        },
      ],
      deletePlatformIntegration: [
        64,
        {
          platform: [5, "Platform!"],
        },
      ],
      requestUploadData: [
        76,
        {
          input: [78, "UploadRequestInput!"],
        },
      ],
      saveCreative: [
        60,
        {
          input: [81, "CreativeInput!"],
        },
      ],
      createFolder: [
        59,
        {
          input: [82, "FolderInput!"],
        },
      ],
      createReferralInvitations: [
        83,
        {
          numberOfInvitations: [17, "Float!"],
        },
      ],
      deleteInvitation: [
        64,
        {
          invitationCode: [4, "String!"],
        },
      ],
      logIn: [
        85,
        {
          input: [86, "AuthenticationInput!"],
        },
      ],
      refreshLogInToken: [4],
      updateUserProfile: [
        63,
        {
          input: [87, "UserProfileInput!"],
        },
      ],
      acceptTermsAndConditions: [64],
      signUp: [
        63,
        {
          code: [4, "String!"],
          user: [88, "SignUpInput!"],
        },
      ],
      logout: [64],
      __typename: [4],
    },
    CreateBrandInput: {
      name: [4],
      logoUrl: [4],
      sector: [67],
      __typename: [4],
    },
    UpdateBrandInput: {
      name: [4],
      logoUrl: [4],
      sector: [67],
      __typename: [4],
    },
    AssetChecks: {
      unrelatedSocialAccountId: [4],
      __typename: [4],
    },
    BrandAssetsInput: {
      adAccount: [74],
      socialAccount: [75],
      __typename: [4],
    },
    AdAccountInput: {
      id: [12],
      type: [6],
      __typename: [4],
    },
    SocialAccountInput: {
      id: [4],
      type: [8],
      __typename: [4],
    },
    UploadDataResponse: {
      id: [4],
      originalUrl: [4],
      presignedData: [77],
      __typename: [4],
    },
    PresignedData: {
      url: [4],
      fields: [4],
      __typename: [4],
    },
    UploadRequestInput: {
      mimeType: [4],
      extension: [4],
      __typename: [4],
    },
    CreateBusinessAccountInput: {
      businessName: [4],
      __typename: [4],
    },
    UpdateBusinessAccountInput: {
      businessName: [4],
      address: [4],
      businessPhone: [4],
      website: [4],
      businessLogoUrl: [4],
      __typename: [4],
    },
    CreativeInput: {
      creativeId: [4],
      name: [4],
      folderId: [17],
      brandId: [4],
      __typename: [4],
    },
    FolderInput: {
      name: [4],
      brandId: [4],
      parentId: [17],
      __typename: [4],
    },
    Invitation: {
      id: [3],
      createdAt: [11],
      updatedAt: [11],
      code: [4],
      email: [4],
      type: [84],
      isAdmin: [64],
      expirationDate: [11],
      __typename: [4],
    },
    InvitationType: {},
    LoggedInUser: {
      sessionToken: [4],
      __typename: [4],
    },
    AuthenticationInput: {
      email: [4],
      password: [4],
      __typename: [4],
    },
    UserProfileInput: {
      name: [4],
      currentPassword: [4],
      newPassword: [4],
      __typename: [4],
    },
    SignUpInput: {
      name: [4],
      email: [4],
      password: [4],
      __typename: [4],
    },
  },
};
