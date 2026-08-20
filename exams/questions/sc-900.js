/*
 * ============================================================
 * 365in5 EXAM SIMULATOR
 * SC-900 — MICROSOFT SECURITY, COMPLIANCE,
 *          AND IDENTITY FUNDAMENTALS
 * ============================================================
 *
 * CURRENT BLUEPRINT
 * -----------------
 * Skills measured as of:
 * 28 July 2026
 *
 * Microsoft published weighting:
 *
 * 1. Describe the concepts of security, compliance,
 *    and identity
 *    10–15%
 *
 * 2. Describe the capabilities of Microsoft Entra
 *    25–30%
 *
 * 3. Describe the capabilities of Microsoft
 *    security solutions
 *    35–40%
 *
 * 4. Describe the capabilities of Microsoft
 *    compliance solutions
 *    20–25%
 *
 * 365in5 50-question allocation:
 *
 * Concepts:      7 = 14%
 * Entra:        14 = 28%
 * Security:     18 = 36%
 * Compliance:   11 = 22%
 *
 * TOTAL:        50 = 100%
 *
 * IMPORTANT
 * ---------
 * These are original practice questions.
 *
 * They are NOT Microsoft exam questions and are NOT sourced
 * from exam dumps or leaked examination material.
 *
 * ============================================================
 */


"use strict";


const SC900_EXAM = {

    id:
        "sc-900",

    code:
        "SC-900",

    title:
        "Microsoft Security, Compliance, and Identity Fundamentals",

    category:
        "Microsoft Security",

    description:
        "Practice security, compliance, identity, Microsoft Entra, " +
        "Microsoft Defender, Microsoft Sentinel, Azure security and " +
        "Microsoft Purview fundamentals.",

    blueprintVersion:
        "2026-07-28",

    blueprintLabel:
        "Skills measured as of 28 July 2026",

    questionCount:
        50,

    durationMinutes:
        45,

    simulatedPassingScore:
        700,


    domains: {


        concepts: {

            name:
                "Describe the concepts of security, compliance, and identity",

            minWeight:
                10,

            maxWeight:
                15,

            simulatorQuestions:
                7

        },


        entra: {

            name:
                "Describe the capabilities of Microsoft Entra",

            minWeight:
                25,

            maxWeight:
                30,

            simulatorQuestions:
                14

        },


        security: {

            name:
                "Describe the capabilities of Microsoft security solutions",

            minWeight:
                35,

            maxWeight:
                40,

            simulatorQuestions:
                18

        },


        compliance: {

            name:
                "Describe the capabilities of Microsoft compliance solutions",

            minWeight:
                20,

            maxWeight:
                25,

            simulatorQuestions:
                11

        }

    }

};



const SC900_QUESTIONS = [


    /*
     * ========================================================
     * DOMAIN 1
     * SECURITY, COMPLIANCE, AND IDENTITY CONCEPTS
     * 7 QUESTIONS
     * ========================================================
     */


    {

        id:
            "SC900-CONCEPT-001",

        domain:
            "concepts",

        type:
            "single",

        objective:
            "Describe the shared responsibility model",

        question:
            "An organisation moves a virtual machine workload from " +
            "its own datacenter to Microsoft Azure. Which statement " +
            "best describes the shared responsibility model?",

        options: [

            "Microsoft and the customer each retain responsibility for different security tasks.",

            "Microsoft becomes responsible for every security decision.",

            "The customer remains responsible for all physical datacenter security.",

            "Using cloud services removes the need for identity security."

        ],

        answer:
            [0],

        explanation:
            "Cloud security responsibility is shared. Microsoft secures " +
            "the underlying cloud infrastructure while customers remain " +
            "responsible for areas such as identities, data, configuration " +
            "and workloads depending on the service model."

    },


    {

        id:
            "SC900-CONCEPT-002",

        domain:
            "concepts",

        type:
            "single",

        objective:
            "Describe Zero Trust",

        question:
            "Which statement best represents the Zero Trust principle " +
            "of 'verify explicitly'?",

        options: [

            "Make access decisions using all available identity, device, location and risk signals.",

            "Automatically trust every device inside the corporate network.",

            "Disable multifactor authentication for internal users.",

            "Allow all authenticated users unrestricted access."

        ],

        answer:
            [0],

        explanation:
            "Zero Trust assumes trust should not be granted simply " +
            "because of network location. Access should be explicitly " +
            "verified using relevant signals."

    },


    {

        id:
            "SC900-CONCEPT-003",

        domain:
            "concepts",

        type:
            "single",

        objective:
            "Describe defense in depth",

        question:
            "An organisation uses identity controls, network filtering, " +
            "endpoint protection and data encryption together. Which " +
            "security concept does this demonstrate?",

        options: [

            "Defense in depth",

            "Single sign-on",

            "Federation",

            "Passwordless authentication"

        ],

        answer:
            [0],

        explanation:
            "Defense in depth uses multiple security layers so that " +
            "failure of one control does not leave the environment unprotected."

    },


    {

        id:
            "SC900-CONCEPT-004",

        domain:
            "concepts",

        type:
            "single",

        objective:
            "Define authentication and authorization",

        question:
            "A user enters credentials and proves who they are. " +
            "Which process has occurred?",

        options: [

            "Authentication",

            "Authorization",

            "Auditing",

            "Encryption"

        ],

        answer:
            [0],

        explanation:
            "Authentication verifies identity. Authorization determines " +
            "what an authenticated identity is permitted to access."

    },


    {

        id:
            "SC900-CONCEPT-005",

        domain:
            "concepts",

        type:
            "single",

        objective:
            "Define authentication and authorization",

        question:
            "After User1 signs in, the system determines that User1 " +
            "may read Document1 but cannot modify it. Which process " +
            "is being applied?",

        options: [

            "Authorization",

            "Authentication",

            "Hashing",

            "Federation"

        ],

        answer:
            [0],

        explanation:
            "Authorization determines what actions an authenticated " +
            "identity is allowed to perform."

    },


    {

        id:
            "SC900-CONCEPT-006",

        domain:
            "concepts",

        type:
            "single",

        objective:
            "Describe encryption and hashing",

        question:
            "Which statement best describes hashing?",

        options: [

            "It produces a one-way representation commonly used for integrity and credential protection.",

            "It always allows the original plaintext to be recovered.",

            "It replaces multifactor authentication.",

            "It assigns permissions to resources."

        ],

        answer:
            [0],

        explanation:
            "Hashing is designed as a one-way transformation and is " +
            "commonly used for integrity checking and secure credential handling."

    },


    {

        id:
            "SC900-CONCEPT-007",

        domain:
            "concepts",

        type:
            "single",

        objective:
            "Describe federation",

        question:
            "An organisation allows users to access a partner service " +
            "using credentials issued by their own trusted identity " +
            "provider. Which concept does this describe?",

        options: [

            "Federation",

            "Disk encryption",

            "Network segmentation",

            "Data retention"

        ],

        answer:
            [0],

        explanation:
            "Federation establishes trust between identity systems so " +
            "identities from one provider can access another service."

    },



    /*
     * ========================================================
     * DOMAIN 2
     * MICROSOFT ENTRA
     * 14 QUESTIONS
     * ========================================================
     */


    {

        id:
            "SC900-ENTRA-001",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe Microsoft Entra ID",

        question:
            "What is the primary purpose of Microsoft Entra ID?",

        options: [

            "Cloud identity and access management",

            "Block storage for virtual machines",

            "Network traffic routing",

            "Database backup"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra ID is Microsoft's cloud-based identity " +
            "and access management service."

    },


    {

        id:
            "SC900-ENTRA-002",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe identity types",

        question:
            "Which Microsoft Entra identity type is commonly used " +
            "to represent an external business partner?",

        options: [

            "Guest user",

            "Managed disk",

            "Network security group",

            "Resource lock"

        ],

        answer:
            [0],

        explanation:
            "Guest identities support external collaboration through " +
            "Microsoft Entra B2B capabilities."

    },


    {

        id:
            "SC900-ENTRA-003",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe hybrid identity",

        question:
            "An organisation synchronises users from on-premises " +
            "Active Directory to Microsoft Entra ID. What identity " +
            "architecture does this represent?",

        options: [

            "Hybrid identity",

            "Anonymous identity",

            "Local-only identity",

            "Network segmentation"

        ],

        answer:
            [0],

        explanation:
            "Hybrid identity connects on-premises directory identities " +
            "with Microsoft Entra cloud identity services."

    },


    {

        id:
            "SC900-ENTRA-004",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe multifactor authentication",

        question:
            "A user signs in with a password and then confirms the " +
            "sign-in using Microsoft Authenticator. Which capability " +
            "is being used?",

        options: [

            "Multifactor authentication",

            "Single-factor authentication",

            "Federated backup",

            "Network peering"

        ],

        answer:
            [0],

        explanation:
            "MFA requires two or more authentication factors from " +
            "different factor categories."

    },


    {

        id:
            "SC900-ENTRA-005",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe passwordless authentication",

        question:
            "Which authentication method can allow a user to sign in " +
            "without entering a traditional password?",

        options: [

            "FIDO2 security key",

            "Azure Storage access key",

            "Network security group",

            "Retention label"

        ],

        answer:
            [0],

        explanation:
            "FIDO2 security keys are one of Microsoft's supported " +
            "passwordless authentication options."

    },


    {

        id:
            "SC900-ENTRA-006",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe Conditional Access",

        question:
            "An organisation wants users signing in from unknown " +
            "locations to complete MFA. Which Microsoft Entra capability " +
            "should it use?",

        options: [

            "Conditional Access",

            "Azure Firewall",

            "Records Management",

            "Data Loss Prevention"

        ],

        answer:
            [0],

        explanation:
            "Conditional Access evaluates identity and contextual " +
            "signals and can require controls such as MFA."

    },


    {

        id:
            "SC900-ENTRA-007",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe Microsoft Entra roles",

        question:
            "What is the purpose of Microsoft Entra administrative roles?",

        options: [

            "Delegate identity and directory administration permissions.",

            "Encrypt virtual machine disks.",

            "Filter network traffic.",

            "Classify sensitive documents."

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra roles provide delegated permissions " +
            "for identity and directory administration."

    },


    {

        id:
            "SC900-ENTRA-008",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe RBAC",

        question:
            "What is the main goal of role-based access control?",

        options: [

            "Assign permissions based on roles and scope.",

            "Replace encryption.",

            "Detect malware.",

            "Create backups automatically."

        ],

        answer:
            [0],

        explanation:
            "RBAC maps permissions to roles and scopes to provide " +
            "controlled access."

    },


    {

        id:
            "SC900-ENTRA-009",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe Microsoft Entra ID Protection",

        question:
            "Which Microsoft Entra capability identifies risky users " +
            "and risky sign-ins using identity risk signals?",

        options: [

            "Microsoft Entra ID Protection",

            "Azure Bastion",

            "Microsoft Purview Audit",

            "Azure Key Vault"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra ID Protection detects and reports identity-related risk."

    },


    {

        id:
            "SC900-ENTRA-010",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe Privileged Identity Management",

        question:
            "Administrators should activate privileged roles only when " +
            "needed rather than holding permanent access. Which capability " +
            "supports this?",

        options: [

            "Privileged Identity Management",

            "Microsoft Sentinel",

            "Azure DDoS Protection",

            "Compliance Manager"

        ],

        answer:
            [0],

        explanation:
            "PIM supports just-in-time and time-bound privileged access."

    },


    {

        id:
            "SC900-ENTRA-011",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe access reviews",

        question:
            "A company wants managers to periodically confirm whether " +
            "employees still need access to a sensitive application. " +
            "Which capability should it use?",

        options: [

            "Access reviews",

            "Azure Firewall",

            "Data lifecycle management",

            "Microsoft Sentinel analytics rules"

        ],

        answer:
            [0],

        explanation:
            "Access reviews provide recurring access certification workflows."

    },


    {

        id:
            "SC900-ENTRA-012",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe identity governance",

        question:
            "Which Microsoft Entra capability helps manage the lifecycle " +
            "of access to groups, applications and resources?",

        options: [

            "Microsoft Entra ID Governance",

            "Azure DDoS Protection",

            "Microsoft Defender Antivirus",

            "Azure DNS"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra ID Governance helps manage identity and access lifecycle."

    },


    {

        id:
            "SC900-ENTRA-013",

        domain:
            "entra",

        type:
            "single",

        objective:
            "Describe password protection",

        question:
            "What problem does Microsoft Entra Password Protection " +
            "primarily help reduce?",

        options: [

            "Use of weak or commonly compromised passwords",

            "DDoS attacks against websites",

            "Accidental deletion of Azure resources",

            "Email retention failures"

        ],

        answer:
            [0],

        explanation:
            "Password Protection blocks weak and banned password choices."

    },


    {

        id:
            "SC900-ENTRA-014",

        domain:
            "entra",

        type:
            "multi",

        objective:
            "Describe Microsoft Entra capabilities",

        question:
            "Which TWO capabilities are part of Microsoft Entra identity " +
            "and access management?",

        options: [

            "Conditional Access",

            "Privileged Identity Management",

            "Azure Load Balancer",

            "Blob lifecycle management"

        ],

        answer:
            [0, 1],

        explanation:
            "Conditional Access and PIM are identity and access " +
            "management capabilities within Microsoft Entra."

    },



    /*
     * ========================================================
     * DOMAIN 3
     * MICROSOFT SECURITY SOLUTIONS
     * 18 QUESTIONS
     * ========================================================
     */


    {

        id:
            "SC900-SEC-001",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Azure DDoS Protection",

        question:
            "Which Azure service helps protect applications from " +
            "large-scale distributed denial-of-service attacks?",

        options: [

            "Azure DDoS Protection",

            "Microsoft Purview Audit",

            "Access Reviews",

            "Compliance Manager"

        ],

        answer:
            [0],

        explanation:
            "Azure DDoS Protection helps defend Azure resources " +
            "against distributed denial-of-service attacks."

    },


    {

        id:
            "SC900-SEC-002",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Azure Firewall",

        question:
            "Which Azure service provides managed network firewall " +
            "capabilities for controlling network traffic?",

        options: [

            "Azure Firewall",

            "Microsoft Entra ID",

            "Microsoft Purview",

            "Azure Key Vault"

        ],

        answer:
            [0],

        explanation:
            "Azure Firewall is a managed cloud-based network security service."

    },


    {

        id:
            "SC900-SEC-003",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Web Application Firewall",

        question:
            "Which capability is designed to protect web applications " +
            "against common HTTP-based attacks?",

        options: [

            "Web Application Firewall",

            "Network security group only",

            "Access review",

            "Retention policy"

        ],

        answer:
            [0],

        explanation:
            "WAF protects web applications from common web-layer attacks."

    },


    {

        id:
            "SC900-SEC-004",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe network security groups",

        question:
            "What is the main purpose of an Azure network security group?",

        options: [

            "Filter inbound and outbound network traffic.",

            "Store encryption keys.",

            "Perform eDiscovery.",

            "Manage user licenses."

        ],

        answer:
            [0],

        explanation:
            "NSGs contain rules used to permit or deny supported network traffic."

    },


    {

        id:
            "SC900-SEC-005",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Azure Bastion",

        question:
            "Administrators need RDP and SSH access to Azure VMs without " +
            "assigning public IP addresses to those VMs. Which service " +
            "can provide this?",

        options: [

            "Azure Bastion",

            "Microsoft Sentinel",

            "Compliance Manager",

            "Microsoft Entra ID Protection"

        ],

        answer:
            [0],

        explanation:
            "Azure Bastion provides managed RDP and SSH connectivity " +
            "without requiring public IP addresses on target VMs."

    },


    {

        id:
            "SC900-SEC-006",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Azure Key Vault",

        question:
            "Which Azure service is designed to securely store secrets, " +
            "keys and certificates?",

        options: [

            "Azure Key Vault",

            "Azure Advisor",

            "Azure DNS",

            "Microsoft Sentinel"

        ],

        answer:
            [0],

        explanation:
            "Azure Key Vault stores and manages cryptographic keys, " +
            "secrets and certificates."

    },


    {

        id:
            "SC900-SEC-007",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Microsoft Defender for Cloud",

        question:
            "Which service provides cloud security posture management " +
            "and workload protection recommendations across Azure resources?",

        options: [

            "Microsoft Defender for Cloud",

            "Microsoft Purview eDiscovery",

            "Microsoft Entra Access Reviews",

            "Azure DevOps Boards"

        ],

        answer:
            [0],

        explanation:
            "Defender for Cloud provides security posture management " +
            "and cloud workload protection capabilities."

    },


    {

        id:
            "SC900-SEC-008",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe CSPM",

        question:
            "What is the main goal of Cloud Security Posture Management?",

        options: [

            "Identify and improve cloud security configuration and posture.",

            "Replace all user passwords.",

            "Provide email archiving.",

            "Manage software licensing."

        ],

        answer:
            [0],

        explanation:
            "CSPM focuses on identifying configuration weaknesses " +
            "and improving overall cloud security posture."

    },


    {

        id:
            "SC900-SEC-009",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Microsoft Sentinel",

        question:
            "Microsoft Sentinel is best described as which type of service?",

        options: [

            "Cloud-native SIEM and security orchestration platform",

            "Identity directory",

            "Endpoint operating system",

            "Document retention service"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Sentinel provides SIEM and SOAR capabilities."

    },


    {

        id:
            "SC900-SEC-010",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe SIEM",

        question:
            "What is a primary function of a SIEM solution?",

        options: [

            "Collect and analyse security events from multiple sources.",

            "Provision virtual machines.",

            "Encrypt every file automatically.",

            "Replace identity providers."

        ],

        answer:
            [0],

        explanation:
            "SIEM platforms aggregate and analyse security telemetry " +
            "to identify suspicious activity."

    },


    {

        id:
            "SC900-SEC-011",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe SOAR",

        question:
            "What is a primary purpose of SOAR capabilities?",

        options: [

            "Automate and orchestrate security-response workflows.",

            "Assign Microsoft 365 licenses.",

            "Configure DNS zones.",

            "Classify documents manually."

        ],

        answer:
            [0],

        explanation:
            "SOAR helps automate repetitive incident response actions " +
            "and coordinate security workflows."

    },


    {

        id:
            "SC900-SEC-012",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Microsoft Defender for Endpoint",

        question:
            "Which Microsoft Defender service focuses primarily on " +
            "endpoint detection, response and device security?",

        options: [

            "Microsoft Defender for Endpoint",

            "Microsoft Defender for Office 365",

            "Microsoft Purview Compliance Manager",

            "Microsoft Entra ID Governance"

        ],

        answer:
            [0],

        explanation:
            "Defender for Endpoint protects and monitors endpoint devices."

    },


    {

        id:
            "SC900-SEC-013",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Microsoft Defender for Office 365",

        question:
            "Which Microsoft Defender service primarily protects email " +
            "and collaboration workloads against threats such as phishing?",

        options: [

            "Microsoft Defender for Office 365",

            "Microsoft Defender for Identity",

            "Microsoft Defender for Cloud Apps",

            "Azure DDoS Protection"

        ],

        answer:
            [0],

        explanation:
            "Defender for Office 365 provides protection for email " +
            "and collaboration services against threats including phishing."

    },


    {

        id:
            "SC900-SEC-014",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Microsoft Defender for Identity",

        question:
            "Which service helps detect identity-based threats involving " +
            "on-premises Active Directory signals?",

        options: [

            "Microsoft Defender for Identity",

            "Microsoft Defender for Office 365",

            "Microsoft Purview Records Management",

            "Azure Bastion"

        ],

        answer:
            [0],

        explanation:
            "Defender for Identity analyses identity-related signals " +
            "including supported on-premises Active Directory activity."

    },


    {

        id:
            "SC900-SEC-015",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Microsoft Defender for Cloud Apps",

        question:
            "Which service helps discover and control cloud application " +
            "usage and assess cloud app risk?",

        options: [

            "Microsoft Defender for Cloud Apps",

            "Azure Key Vault",

            "Microsoft Entra Password Protection",

            "Azure Backup"

        ],

        answer:
            [0],

        explanation:
            "Defender for Cloud Apps provides cloud app discovery, " +
            "visibility and governance."

    },


    {

        id:
            "SC900-SEC-016",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Defender Vulnerability Management",

        question:
            "Which Microsoft Defender capability helps identify software " +
            "vulnerabilities and security weaknesses on endpoints?",

        options: [

            "Microsoft Defender Vulnerability Management",

            "Microsoft Purview eDiscovery",

            "Microsoft Entra Access Packages",

            "Azure Traffic Manager"

        ],

        answer:
            [0],

        explanation:
            "Defender Vulnerability Management identifies vulnerabilities " +
            "and helps prioritise remediation."

    },


    {

        id:
            "SC900-SEC-017",

        domain:
            "security",

        type:
            "single",

        objective:
            "Describe Microsoft Defender XDR",

        question:
            "What is a key benefit of Microsoft Defender XDR?",

        options: [

            "Correlate signals and incidents across multiple security products.",

            "Replace Microsoft Entra ID.",

            "Store database backups.",

            "Create Azure subscriptions."

        ],

        answer:
            [0],

        explanation:
            "Defender XDR correlates security signals across endpoints, " +
            "identity, email and cloud applications."

    },


    {

        id:
            "SC900-SEC-018",

        domain:
            "security",

        type:
            "multi",

        objective:
            "Describe Microsoft security solutions",

        question:
            "Which TWO products are part of Microsoft's Defender security " +
            "portfolio?",

        options: [

            "Microsoft Defender for Endpoint",

            "Microsoft Defender for Office 365",

            "Microsoft Purview Records Management",

            "Azure Cost Management"

        ],

        answer:
            [0, 1],

        explanation:
            "Defender for Endpoint and Defender for Office 365 are " +
            "security products within Microsoft's Defender portfolio."

    },



    /*
     * ========================================================
     * DOMAIN 4
     * MICROSOFT COMPLIANCE SOLUTIONS
     * 11 QUESTIONS
     * ========================================================
     */


    {

        id:
            "SC900-COMP-001",

        domain:
            "compliance",

        type:
            "single",

        objective:
            "Describe Service Trust Portal",

        question:
            "Where can customers find Microsoft audit reports, " +
            "compliance documentation and information about how " +
            "Microsoft cloud services meet regulatory requirements?",

        options: [

            "Service Trust Portal",

            "Azure Bastion",

            "Microsoft Sentinel",

            "Windows Autopilot"

        ],

        answer:
            [0],

        explanation:
            "The Service Trust Portal provides compliance, audit " +
            "and trust documentation for Microsoft cloud services."

    },


    {

        id:
            "SC900-COMP-002",

        domain:
            "compliance",

        type:
            "single",

        objective:
            "Describe Compliance Manager",

        question:
            "Which Microsoft Purview capability helps organisations " +
            "assess and manage their compliance posture against " +
            "standards and regulations?",

        options: [

            "Compliance Manager",

            "Azure Firewall",

            "Microsoft Defender for Endpoint",

            "Azure Bastion"

        ],

        answer:
            [0],

        explanation:
            "Compliance Manager helps assess compliance posture and " +
            "manage improvement actions."

    },


    {

        id:
            "SC900-COMP-003",

        domain:
            "compliance",

        type:
            "single",

        objective:
            "Describe compliance score",

        question:
            "What does the Microsoft Purview compliance score primarily represent?",

        options: [

            "A measurement that helps track progress toward recommended compliance actions.",

            "A guaranteed legal certification.",

            "The number of Microsoft 365 users.",

            "The number of malware detections."

        ],

        answer:
            [0],

        explanation:
            "Compliance score helps organisations understand and " +
            "track progress on recommended compliance improvements."

    },


    {

        id:
            "SC900-COMP-004",

        domain:
            "compliance",

        type:
            "single",

        objective:
            "Describe sensitivity labels",

        question:
            "You need to classify a document as Confidential and apply " +
            "protection based on that classification. Which Microsoft " +
            "Purview capability should you use?",

        options: [

            "Sensitivity labels",

            "Network security groups",

            "Azure Bastion",

            "Microsoft Sentinel analytics rules"

        ],

        answer:
            [0],

        explanation:
            "Sensitivity labels classify and can protect organisational data."

    },


    {

        id:
            "SC900-COMP-005",

        domain:
            "compliance",

        type:
            "single",

        objective:
            "Describe Data Loss Prevention",

        question:
            "An organisation wants to prevent users from emailing " +
            "credit card numbers outside the company. Which Microsoft " +
            "Purview capability should it use?",

        options: [

            "Data Loss Prevention",

            "Azure DDoS Protection",

            "Privileged Identity Management",

            "Microsoft Defender Vulnerability Management"

        ],

        answer:
            [0],

        explanation:
            "DLP policies detect and control the movement of sensitive information."

    },


    {

        id:
            "SC900-COMP-006",

        domain:
            "compliance",

        type:
            "single",

        objective:
            "Describe retention",

        question:
            "A company must keep business records for seven years before " +
            "they can be deleted. Which Microsoft Purview capability " +
            "helps enforce this?",

        options: [

            "Retention policies and retention labels",

            "Azure Firewall rules",

            "Microsoft Entra Conditional Access",

            "Network security groups"

        ],

        answer:
            [0],

        explanation:
            "Retention policies and labels govern how long organisational " +
            "content must be retained or when it can be deleted."

    },


    {

        id:
            "SC900-COMP-007",

        domain:
            "compliance",

        type:
            "single",

        objective:
            "Describe Records Management",

        question:
            "Which Microsoft Purview capability is specifically designed " +
            "to manage business records that may have regulatory or " +
            "legal retention requirements?",

        options: [

            "Records Management",

            "Microsoft Defender for Cloud",

            "Azure Load Balancer",

            "Microsoft Entra ID Protection"

        ],

        answer:
            [0],

        explanation:
            "Records Management supports declaration and lifecycle " +
            "management of regulatory and business records."

    },


    {

        id:
            "SC900-COMP-008",

        domain:
            "compliance",

        type:
            "single",

        objective:
            "Describe Content explorer",

        question:
            "Compliance staff need visibility into where sensitive " +
            "information types and labels appear across Microsoft 365. " +
            "Which Microsoft Purview tool can help?",

        options: [

            "Content explorer",

            "Azure Resource Graph",

            "Microsoft Sentinel",

            "Azure Bastion"

        ],

        answer:
            [0],

        explanation:
            "Content explorer helps compliance teams understand where " +
            "classified and sensitive content exists."

    },


    {

        id:
            "SC900-COMP-009",

        domain:
            "compliance",

        type:
            "single",

        objective:
            "Describe Insider Risk Management",

        question:
            "Which Microsoft Purview solution helps identify potentially " +
            "risky user activity involving organisational data?",

        options: [

            "Insider Risk Management",

            "Azure Firewall",

            "Microsoft Entra Connect",

            "Azure Backup"

        ],

        answer:
            [0],

        explanation:
            "Insider Risk Management helps identify and investigate " +
            "potentially risky internal activity."

    },


    {

        id:
            "SC900-COMP-010",

        domain:
            "compliance",

        type:
            "single",

        objective:
            "Describe eDiscovery",

        question:
            "Legal staff need to search, preserve and review electronic " +
            "content related to a court case. Which Microsoft Purview " +
            "capability should they use?",

        options: [

            "eDiscovery",

            "Azure DDoS Protection",

            "Microsoft Defender for Identity",

            "Microsoft Entra Password Protection"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Purview eDiscovery supports legal discovery " +
            "workflows involving search, preservation and review of content."

    },


    {

        id:
            "SC900-COMP-011",

        domain:
            "compliance",

        type:
            "multi",

        objective:
            "Describe Microsoft Purview capabilities",

        question:
            "Which TWO are Microsoft Purview compliance capabilities?",

        options: [

            "Audit",

            "Data Loss Prevention",

            "Azure Firewall",

            "Azure Bastion"

        ],

        answer:
            [0, 1],

        explanation:
            "Microsoft Purview includes Audit and Data Loss Prevention " +
            "among its compliance and data-governance capabilities."

    }

];



/*
 * ============================================================
 * RUNTIME VALIDATION
 * ============================================================
 */


(function validateSC900QuestionBank() {


    const domainCounts = {

        concepts:
            0,

        entra:
            0,

        security:
            0,

        compliance:
            0

    };


    const ids =
        new Set();


    /*
     * ========================================================
     * TOTAL COUNT
     * ========================================================
     */


    if (
        SC900_QUESTIONS.length !==
        SC900_EXAM.questionCount
    ) {

        throw new Error(

            "SC-900 question-bank error: expected " +
            SC900_EXAM.questionCount +
            " questions but found " +
            SC900_QUESTIONS.length +
            "."

        );

    }


    /*
     * ========================================================
     * QUESTION VALIDATION
     * ========================================================
     */


    SC900_QUESTIONS.forEach(
        (question) => {


            if (
                !question.id ||
                typeof question.id !==
                "string"
            ) {

                throw new Error(
                    "SC-900 question-bank error: invalid question ID."
                );

            }


            if (
                ids.has(
                    question.id
                )
            ) {

                throw new Error(

                    "SC-900 question-bank error: duplicate ID " +
                    question.id

                );

            }


            ids.add(
                question.id
            );


            if (
                !Object.prototype.hasOwnProperty.call(
                    SC900_EXAM.domains,
                    question.domain
                )
            ) {

                throw new Error(

                    "SC-900 question-bank error: unknown domain " +
                    question.domain +
                    " on " +
                    question.id

                );

            }


            domainCounts[
                question.domain
            ]++;


            if (
                question.type !==
                "single" &&
                question.type !==
                "multi"
            ) {

                throw new Error(

                    "SC-900 question-bank error: invalid type on " +
                    question.id

                );

            }


            if (
                !Array.isArray(
                    question.options
                ) ||
                question.options.length <
                2
            ) {

                throw new Error(

                    "SC-900 question-bank error: invalid options on " +
                    question.id

                );

            }


            if (
                !Array.isArray(
                    question.answer
                ) ||
                question.answer.length ===
                0
            ) {

                throw new Error(

                    "SC-900 question-bank error: missing answer on " +
                    question.id

                );

            }


            if (
                question.type ===
                "single" &&
                question.answer.length !==
                1
            ) {

                throw new Error(

                    "SC-900 question-bank error: single-answer question " +
                    question.id +
                    " has multiple answers."

                );

            }


            question.answer.forEach(
                (answerIndex) => {

                    if (
                        !Number.isInteger(
                            answerIndex
                        ) ||
                        answerIndex < 0 ||
                        answerIndex >=
                        question.options.length
                    ) {

                        throw new Error(

                            "SC-900 question-bank error: invalid answer index on " +
                            question.id

                        );

                    }

                }
            );

        }
    );


    /*
     * ========================================================
     * DOMAIN WEIGHTING VALIDATION
     * ========================================================
     */


    Object.entries(
        SC900_EXAM.domains
    ).forEach(
        (
            [
                domainId,
                domain
            ]
        ) => {


            const actual =
                domainCounts[
                    domainId
                ];


            const expected =
                domain.simulatorQuestions;


            if (
                actual !==
                expected
            ) {

                throw new Error(

                    "SC-900 weighting error for " +
                    domain.name +
                    ": expected " +
                    expected +
                    " questions but found " +
                    actual +
                    "."

                );

            }


            const percentage =

                (
                    actual /
                    SC900_EXAM.questionCount
                ) *
                100;


            if (
                percentage <
                domain.minWeight ||
                percentage >
                domain.maxWeight
            ) {

                throw new Error(

                    "SC-900 weighting error: " +
                    domain.name +
                    " is " +
                    percentage +
                    "% but Microsoft's published range is " +
                    domain.minWeight +
                    "–" +
                    domain.maxWeight +
                    "%."

                );

            }

        }
    );


    console.info(
        "[365in5] SC-900 question bank validated."
    );


    console.info(
        "[365in5] SC-900 weighting:",
        domainCounts
    );


})();



/*
 * ============================================================
 * EXPOSE TO GENERIC SIMULATOR
 * ============================================================
 */


window.EXAM_CONFIG =
    SC900_EXAM;


window.EXAM_QUESTIONS =
    SC900_QUESTIONS;
