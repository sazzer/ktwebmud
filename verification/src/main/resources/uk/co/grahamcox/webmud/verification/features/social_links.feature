@wip
Feature: Social Links in Footer Area

  Background:
    Given the configured social links are:
      | Name     | URL                     |
      | Facebook | http://www.facebook.com |
      | Twitter  | http://www.twitter.com  |
      | Google+  | http://plus.google.com  |

  Scenario: Check the correct Social Links are present
    When I load the home page
    Then the following social links are present:
      | Facebook |
      | Twitter  |
      | Google+  |

    Scenario Outline: Check the Social Links go to the correct places
      When I load the home page
      Then the social link "<Name>" has details:
        | Label | <Name> |
        | URL   | <URL>  |

    Examples:
      | Name     | URL                      |
      | Facebook | http://www.facebook.com/ |
      | Twitter  | http://www.twitter.com/  |
      | Google+  | http://plus.google.com/  |
